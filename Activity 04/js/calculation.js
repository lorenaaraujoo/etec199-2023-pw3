import Person from "./people.js";
import { People } from "./people.js";

export default function calculateObjetcs(People) {
for (var i = 0; i < People.length; i++) {
    var Person = People[i].objetc;
    Person.calculateIMC();
    Person.categorizeIMC();
    }
}

export function showIMC() {
    var number = document.getElementById("number").value;
    number--;
    var text = "";

    if (number < 0 || number > 19){
        text += "Number invalid";
        document.getElementById("result").innerHTML = text;
    }else{
        var Person = People[number].objetc;
        text += Person.name + " - " + Person.imc.toFixed(2) + " Categorized: "+ Person.imcCategory +"<br>";
        document.getElementById("result").innerHTML = text;
    };
}

export function separateByCategory(){
    var table = {
        "Under weight": 0,
        "Normal weight": 0,
        "Overweight": 0,
        "Grade I obesity": 0,
        "Grade II obesity": 0,
        "Grade III obesity": 0
    };

    for (var i = 0; i < People.length; i++) {
        var Person = People[i].objetc;
        table[Person.imcCategory] += 1;
    }

    var text = "";
    for (var category in table) {
        text += category + ": " + table[category] + "<br>";
    }

    document.getElementById("result").innerHTML = text;
}

export function showList(){
    var text = "";
    for (var i = 0; i < People.length; i++) {
        var Person = People[i].objetc;
        text += Person.name + " - " + Person.imc.toFixed(2) + " Categorized: "+ Person.imcCategory +"<br>";
    }
    document.getElementById("result").innerHTML = text;
}