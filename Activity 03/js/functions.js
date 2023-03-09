import {returnPeople} from "./people.js";
var people = returnPeople();

export default function calculatorIMC(people) {
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        person.IMC = person.Weight / (person.Height * person.Height);

        if (person.IMC < 18.5) {
            person.CategoryIMC = "Under weight";
        } else if (person.IMC >= 18.5 && person.IMC < 25) {
            person.CategoryIMC = "Normal weight";
        } else if (person.IMC >= 25 && person.IMC < 30) {
            person.CategoryIMC = "Overweight";
        } else if (person.IMC >= 30 && person.IMC < 35) {
            person.CategoryIMC = "Grade I obesity";
        } else if (person.IMC >= 35 && person.IMC < 40) {
            person.CategoryIMC = "Grade II obesity";
        } else {
            person.CategoryIMC = "Grade III obesity";
        }
    }
};

export function showIMC() {
    var number = document.getElementById("number").value;
    number--;
    var Person = people[number];
    if (number < 0 || number > 19){
        document.getElementById("result").innerHTML = "Invalid number";
    }else{
        var text = "";
        text += Person.Name + " - " + Person.IMC.toFixed(2) + " Categorized "+ Person.CategoryIMC +"<br>";
        document.getElementById("result").innerHTML = text;
    };
};

export function separateByCategory(){
    var table = {
        "Under weight": 0,
        "Normal weight": 0,
        "Overweight": 0,
        "Grade I obesity": 0,
        "Grade II obesity": 0,
        "Grade III obesity": 0
    };
    
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        table[person.CategoryIMC] += 1;
    }
    
    var text = "";
    for (var category in table) {
        text += category + ": " + table[category] + "<br>";
    }
    document.getElementById("resultado").innerHTML = text;
};

export function displayAll(){
    var text = "";
    for (var i = 0; i < person.length; i++) {
        var place = i + 1;
        var person = People[i];
        text += place + " | " + person.Name + " - " + person.IMC.toFixed(2) + " Categorized "+ person.CategoryIMC +"<br>";
    }
    document.getElementById("result").innerHTML = text;
}
