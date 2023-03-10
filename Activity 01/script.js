var people = [{
    "Name": "Yan",
    "Age": 18,
    "Height": 1.72,
    "Weight": 60,
    "IMC": 0
},

{
    "Name": "Lorena",
    "Age": 17,
    "Height": 1.63,
    "Weight": 60,
    "IMC": 0
},

{
    "Name": "Karolina",
    "Age": 18,
    "Height": 1.69,
    "Weight": 60,
    "IMC": 0
},

{
    "Name": "Thayani",
    "Age": 32,
    "Height": 1.53,
    "Weight": 60,
    "IMC": 0
},

{
    "Name": "Everson",
    "Age": 35,
    "Height": 1.72,
    "Weight": 60,
    "IMC": 0
},
];

function calculatorIMC() {
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        person.IMC = person.Weight / (person.Height * person.Height);
    }
};

function showIMC(person) {
        var text = "";
        text += person.Name + " - " + person.IMC.toFixed(2) + "<br>";
        document.getElementById("result").innerHTML = text;
};

calculatorIMC();
