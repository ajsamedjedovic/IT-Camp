const recenica =
  "Treba nam nova recenica gde svaka rec zavrsava velikim slovom";
let recenica2 = "";

for (let i = 0; i < recenica.length; i++) {
  if (i == recenica.length - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] == " ") {
    recenica2 += recenica[i].toUpperCase();
  } else recenica2 += recenica[i];
}

console.log(recenica2);

const recenica3 = prompt("unesite svoju recenicu");
let brojac = 0;

for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === "m" || recenica3[i] === "M") {
    brojac++;
  }
}
console.log(brojac);
