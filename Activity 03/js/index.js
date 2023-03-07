import {returnPeople} from "./people.js";
import calculatorIMC from "./functions.js";
import {showIMC} from "./functions.js";

var people = returnPeople();

document.getElementById("btnSearch").addEventListener("click", showIMC);

people = calculatorIMC(people);
console.log(people);