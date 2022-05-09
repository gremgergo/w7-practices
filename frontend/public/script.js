let globalVariable1 = 12; 

let globalVariable2 = function () { // global scope
    console.log(" inside the function", globalVariable1); // consol logon belul vesszovel tudunk sorolni

    let functionVariable1 = "hello"

    let functionVariable2 = function () { // function scope
        console.log(" funVariable2 belseje ");
        console.log(globalVariable1);
        console.log(functionVariable1);

        let functionInFunctionVariable1 = true;

        let functipnInFunctionVariabe2 = function () {
            console.log(functionInFunctionVariable1); // a functionInFunctionVariable1-t mindegy hol consolozzuk ki 
        };
        
        functipnInFunctionVariabe2();
    }

    functionVariable2();

    console.log(functionVariable1); // ez mukodott mert beleirtuk a fuggvenyen belulre es ezert latja a valtozot
    
    if (functionVariable1 === "hello") { // block scope mint pl a foorloop is
        var blockVariable1 = "bye"
    };

    console.log(blockVariable1); // let-et atirtuk var-ra ezaltal fuggveny szinten nezte igy megkaptuk az eredmenyt 
   //  console.log(blockVariable1); hibat dob mert a blockScope-on kivul consoloztuk ki

   // let, const-nak van block, function es global scopja a var-nak csak function scope-ja van

}

globalVariable2(); // ezzel hivjuk meg a globalVariable2 fuggveny

//console.log(functionVariable1); nem mukodott mert a fuggvenyen kivul van es nem lat belulre 



var varVariable = 1;

console.log(varVariable); // ha a var felett barhol conzolozzuk ki akkor undifined lesz 

let letVariable1 = 2;
let letVariable2; // ha nem inicializaljuk(erteket adunk) akkor undefined kapunk

console.log(letVariable1);
console.log(letVariable2);

//const constVariable1; // ha nem inicializaljuk akkor szintax errort kapunk, attol kulonbozik a let-tol hogy nem tudjuk mindig inicializalni 

//console.log(constVariable1);

const constVariable2 = "ciao"

console.log(constVariable2);
                        
const object1 = {}; // object literal, ezzel letrejott mar egy objektum ebben az esetben ures mert nincs semmi a {} kozott
object1.key = "value"; // ezzel tudunk az objektumba erteket
// object1 = {key: "value"}; // ezzel nem tudunk erteket adni az objektumnak mert azt hiszi ki akarjuk cserelni de nem lehet mert mar van erteke  

console.log(object1);

// let, var ha tuti meg fog valtozni az ertek
// const ha nem fog valtozni vagy ne lehessen felulirni 



const globalVariable3 = function (parameter1, parameter2, parameter3) {
    console.log(parameter1); // undifined lesz, csak fuggveny scope-ja lehet
    console.log(parameter2); 
    console.log(parameter3); 
    console.log(parameter3()); // ha () rakunk akkor is lefut a fuggveny 

}

const globalVariable4 = "apple";

const globalVaraible5 = function () {
    return "pear"
};

const globalVaraible6 = function () {
    return "shoes"
};

globalVariable3(globalVaraible5(), globalVariable4, globalVaraible6) // variable6 callback function

// globalVariable3(3, 2); // sorrendiseg fontos
// globalVariable3(3, globalVariable4);

// globalVariable3(globalVaraible5, globalVariable4); // igy csak a fuggveny fog megjelenni de meg nem fut le 
// globalVariable3(globalVaraible5(), globalVariable4); // ha rakunk zarojelet le is futtatjuk a fuggveny es megkapjuk az eredmenyt 


const loadEvent = function (parameter1) {
    const rootElement = document.getElementById("root") // valtozot nem irunk le const, var nelkul 

    console.log(rootElement);

    console.log(parameter1);

    rootElement.addEventListener("click", function (event) { // a function() a call back function 
        console.log(event.currentTarget); // currentTarget nelkul reagal de nem azt mutatja meg mire kattintok

        event.currentTarget.insertAdjacentHTML("beforeend","Clicked")

        event.currentTarget.classList.toggle("clicked") // toggle egy metodus ha nincs rajta rarakja ha rajta van leveszi
    })

    // console.log(globalVariable1);
}

window.addEventListener("load", loadEvent) 


// deklaralni lefoglalni egy nevet neki a memoriaban pl haz epites, inicalizalni ertek megadas mint pl amikor bekoltozik a tulaj az ujanaon epitett hazba

// ha variable is not defined hiba uzenet akkor rossz a scope amiben problalkozunk

// ha can not access hiba uzenet akkor tud rola csak nem inicializalodik 