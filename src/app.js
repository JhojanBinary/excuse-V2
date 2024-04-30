/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arrays con las partes de la excusa
let who = ["El chancho", "Mi perro", "Su tortuga", "Mi pájaro"];
let action = ["se comió", "mordió", "aplastó", "rompió"];
let what = ["mi tarea", "la cama", "el coche"];
let when = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante mi almuerzo",
  "mientras dormia",
  "cuando miraba una peli",
  "a la vez que hacia ejercicio",
  "cuando escuchaba música"
];
//funcion que genera un numero aleatorio del tamaño de la lista
//el valor string se almacena en "who" en formato de lista  y luego en randonWho para un mejor uso
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  //suma  y concateancion de mis strings
  let excusegenerator =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";
  return excusegenerator;
}

document.getElementById("excuse").innerText = generateExcuse();
