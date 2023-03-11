import calculateObjetcs from "./calculation.js";
import { showIMC } from "./calculation.js";
import { separateByCategory } from "./calculation.js";
import { showList } from "./calculation.js";
import Person from "./people.js";
import { People } from "./people.js";

console.log(People);
calculateObjetcs(People);

document.getElementById("showIMC").addEventListener("click", showIMC);
document.getElementById("separateByCategory").addEventListener("click", separateByCategory);
document.getElementById("showList").addEventListener("click", showList);