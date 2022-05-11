const menuButtonComponent = function() { // ha egy fuggvenyt ugy adunk at hogy ott a zarojel akkor a fuggveny erteket adjuk meg nem a fuggveny ezert nem call back fuggveny 
    return `
        <button id="menu-bt"></button>
    `
}

const beerNavComponent = function(inner) {
    return `
        <nav>${inner}</nav>
    `
}

const beerAnchorComponent = function(title, id) {
    return`
        <a href="#${id}">${title}</a> 
    ` // ha oldalon belul szeretnenk navigalni # kell href="#.."
}

const beerSectionComponent = function(title, sub, text, id) { 
    return `
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
        </section>
    `
}

const menuButtonClickEvent = function (event) {
    event.currentTarget.closest("#root").classList.toggle("menu-opened");

}


const loadEvent = function () {
    /* console.log(typeof beerSectionComponent);
    console.log(typeof beerSectionComponent());

    (function () {
        console.log("blalbabla");
    })() */

    const rootElement = document.getElementById("root") // valtozot nem irunk le const, var nelkul 

    // console.log(rootElement.parentElement); // root element parentje a body

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonElement = document.getElementById("menu-bt"); // ezzel jeloljuk ki a menu button id-t

    menuButtonElement.addEventListener("click", menuButtonClickEvent);


    let beerSections = ""

    for (const beer of beers.cards) { // iterator barmi lehet 
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }
    console.log(beerSections);
    rootElement.insertAdjacentHTML("beforeend", beerSections);

    let beerAnchors = ""

    for (const beer of beers.cards) {
        beerAnchors += beerAnchorComponent(beer.title)
    }

    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors)) 
}

window.addEventListener("load", loadEvent) 

// ha fuggveny utan van zarojel az egy lefuttando fuggveny ha nincs akkor egy callback function 

