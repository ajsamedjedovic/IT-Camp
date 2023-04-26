let d = +prompt("unesite duzinu terena");
let s = +prompt("unesite sirinu terena");
let r = +prompt("unesite rastojanje terena");

let o = 2 * d * (2 * s) + 8 * r;
if (isNaN(d) || isNaN(s) || isNaN(r)) {
  console.log("Niste uneli konkretne brojeve");
} else if (d >= 90 && d <= 120 && s > 45 && s < 90 && r > 2 && r < 10) {
  console.log("Treba nam", o, "metara za ogradu");
} else {
  console.log("niste uneli dobre brojeve");
}

//OSNOVE O STRINGOVIMA
const recenica = "Necemo matematicke zadatke!";
console.log(recenica);
console.log(recenica[0]);
// pristupanje karakteru preko indexa:[]
//poslednji karakter stringa  ima index(cela duzina stringa -1)

//Za izracunavanje duzine stringa koristimo lenght metodu:
const duzina = recenica.length;
console.log(duzina);
// console.log(recenica.length);
//ispisivanje poslednjeg karaktera stringa:
console.log(recenica[recenica.length - 1]);
