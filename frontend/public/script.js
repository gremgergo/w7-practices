const menuButtonComponent = function() {
    return `
        <button id="menu-bt"></button>
    `
}


const loadEvent = function () {
    const rootElement = document.getElementById("root") // valtozot nem irunk le const, var nelkul 

    console.log(rootElement.parentElement); // root element parentje a body

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent())

    const menuButtonElement = document.getElementById("menu-bt") // ezzel jeloljuk ki a menu button id-t

    menuButtonElement.addEventListener("click", function (event) { // a function() a call back function 

        //event.currentTarget.classList.toggle("clicked") // toggle egy metodus ha nincs rajta rarakja ha rajta van leveszi
        // console.log(rootElement);
        // console.log(event.currentTarget.parentElement);
        // console.log(event.currentTarget.closest("#root"));
        event.currentTarget.closest("#root").classList.toggle("menu-opened");
    })
}

window.addEventListener("load", loadEvent) 



