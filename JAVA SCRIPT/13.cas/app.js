//1.zadatak
const recenica = prompt("Unesite  svoju recenicu");
let recenica1 = "";

for (i = 0; i < recenica.length; i++) {
  if (recenica[i] == "a" && recenica[i + 1] == "n") {
    recenica1 += "d";
  } else if (recenica[i] == "a") {
    recenica1 += "t";
  } else recenica1 += recenica[i];
}
console.log(recenica1);

//2.zadatak
recenica2 = prompt("unesite svoju recenicu");
recenica3 = "";
for (i = 0; i < recenica2.length; i++) {
  if (
    recenica2[i] == "a" ||
    recenica2[i] == "e" ||
    recenica2[i] == "i" ||
    recenica2[i] == "o" ||
    recenica2[i] == "u"
  ) {
    recenica3 += recenica2[i].toUpperCase();
  } else {
    recenica3 += recenica2[i];
  }
}
console.log(recenica3);
