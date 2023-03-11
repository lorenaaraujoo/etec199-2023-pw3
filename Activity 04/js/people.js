export default class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.imc = 0;
        this.imcCategory = "N/A";
    }

    calculateIMC() {
        this.imc = this.weight / (this.height * this.height);
    }

    categorizeIMC() {
        if (this.imc < 18.5) {
            this.imcCategory = "Under weight";
        } else if (this.imc >= 18.5 && this.imc < 25) {
            this.imcCategory = "Normal weight";
        } else if (this.imc >= 25 && this.imc < 30) {
            this.imcCategory = "Overweight";
        } else if (this.imc >= 30 && this.imc < 35) {
            this.imcCategory = "Grade I obesity";
        } else if (this.imc >= 35 && this.imc < 40) {
            this.imcCategory = "Grade II obesity";
        } else {
            this.imcCategory = "Grade III obesity";
        }
    }
}

export let People = [
    {objetc: new Person("João", 20, 1.80, 80)},
    {objetc: new Person("Maria", 25, 1.60, 80)},
    {objetc: new Person("José", 30, 1.70, 70)},
    {objetc: new Person("Ana", 35, 1.50, 50)},
    {objetc: new Person("Marcos", 40, 1.90, 90)},
    {objetc: new Person("Julia", 45, 1.80, 80)},
    {objetc: new Person("Pedro", 50, 1.70, 46)},
    {objetc: new Person("Paulo", 55, 1.60, 76)},
    {objetc: new Person("Mariana", 60, 1.50, 85)},
    {objetc: new Person("Joana", 65, 1.40, 70)},
    {objetc: new Person("Carlos", 70, 1.30, 80)},
    {objetc: new Person("Carla", 75, 1.20, 200)},
    {objetc: new Person("Ricardo", 80, 1.10, 100)},
    {objetc: new Person("Rita", 85, 1.00, 75)},
    {objetc: new Person("Roberto", 90, 1.90, 68)},
    {objetc: new Person("Roberta", 95, 1.80, 76)},
    {objetc: new Person("Rafael", 100, 1.70, 85)},
    {objetc: new Person("Rafaela", 105, 1.60, 95)},
    {objetc: new Person("Taina", 110, 1.50, 74)},
    {objetc: new Person("Julia", 115, 1.40, 95)}
];
