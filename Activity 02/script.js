var People = [{
    "Name": "Yan",
    "Age": 18,
    "Height": 1.72,
    "Weight": 75,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Lorena",
    "Age": 17,
    "Height": 1.63,
    "Weight": 60,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Karolina",
    "Age": 18,
    "Height": 1.69,
    "Weight": 95,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Thayani",
    "Age": 32,
    "Height": 1.53,
    "Weight": 77,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Everson",
    "Age": 35,
    "Height": 1.72,
    "Weight": 60,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Alef",
    "Age": 24,
    "Height": 1.42,
    "Weight": 62,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Gabriel",
    "Age": 54,
    "Height": 1.92,
    "Weight": 100,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Taina",
    "Age": 35,
    "Height": 1.82,
    "Weight": 98,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Tarsila",
    "Age": 55,
    "Height": 1.62,
    "Weight": 88,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Milena",
    "Age": 85,
    "Height": 1.72,
    "Weight": 78,
    "IMC": 0,
    "CategoryIMC": "Small feet"
},

{
    "Name": "Aline",
    "Age": 29,
    "Height": 1.52,
    "Weight": 44,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Giovanni",
    "Age": 35,
    "Height": 1.62,
    "Weight": 60,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Benjamin",
    "Age": 12,
    "Height": 1.22,
    "Weight": 15,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Helena",
    "Age": 1,
    "Height": 1.12,
    "Weight": 9,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Carlos",
    "Age": 53,
    "Height": 1.57,
    "Weight": 70,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Agar",
    "Age": 45,
    "Height": 1.66,
    "Weight": 60,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Sther",
    "Age": 65,
    "Height": 1.85,
    "Weight": 60,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Stella",
    "Age": 28,
    "Height": 1.92,
    "Weight": 99,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Mateus",
    "Age": 24,
    "Height": 1.82,
    "Weight": 72,
    "IMC": 0,
    "CategoryIMC": "N/A"
},

{
    "Name": "Vanessa",
    "Age": 43,
    "Height": 1.62,
    "Weight": 67,
    "IMC": 0,
    "CategoryIMC": "N/A"
},
];

function calculatorIMC() {
    for (var i = 0; i < People.length; i++) {
        var person = People[i];
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

calculatorIMC();

function showIMC() {
    var number = document.getElementById("number").value;
    number--;
    var Person = People[number];
    if (number < 0 || number > 19){
        document.getElementById("result").innerHTML = "Invalid number";
    }else{
        var text = "";
        text += Person.Name + " - " + Person.IMC.toFixed(2) + " Categorized "+ Person.CategoryIMC +"<br>";
        document.getElementById("result").innerHTML = text;
    };
};

function separateByCategorya(){
    var table = {
        "Under weight": 0,
        "Normal weight": 0,
        "Overweight": 0,
        "Grade I obesity": 0,
        "Grade II obesity": 0,
        "Grade III obesity": 0
    };
    
    for (var i = 0; i < People.length; i++) {
        var person = People[i];
        table[person.CategoryIMC] += 1;
    }
    
    var text = "";
    for (var category in table) {
        text += category + ": " + table[category] + "<br>";
    }
    document.getElementById("resultado").innerHTML = text;
};

function displayAll(){
    var text = "";
    for (var i = 0; i < person.length; i++) {
        var place = i + 1;
        var person = People[i];
        text += place + " | " + person.Name + " - " + person.IMC.toFixed(2) + " Categorized "+ person.CategoryIMC +"<br>";
    }
    document.getElementById("result").innerHTML = text;
}
