const recenica = prompt("unesite neku recenicu");
brojac = 0;
for (let i = 0; i < recenica.length; i++) {
  if (!isNaN(recenica[i]) && recenica[i] != " ") {
    brojac++;
  }
}
console.log(brojac);

const recenica2 = prompt("unesite Vas tekst");
recenica3 = "";
//1.domaci
for (i = 0; i < recenica2.length; i++) {
  if (recenica2[i] == " ") {
    continue;
  } else {
    recenica3 += recenica2[i];
  }
}
console.log(recenica3);

//2.domaci

recenica11 = prompt("unesite svoj tekst");
recenica22 = "";
