//METODE KOD NIZOVA

//keys() - metoda vraca Array Iterator Object  kljuceva nekog niza.
const grupa = ["Emir", "Ajsa", "Selver", "Asija"];
const kljucevi = grupa.keys();
console.log(kljucevi);

//0,1,2,3//
for (let kljuc of kljucevi) {
  console.log(kljuc);
}

//entries()-metoda vraca Array Iterator Object key/value parova nekog niza.
const parovi = grupa.entries();
console.log(parovi);

for (let par of parovi) {
  console.log(par);
}

//callback funkcija predstavlja funkciju koju saljemo kao argument neke metode(druge funkcije).

function glavnaFunkcija(callback) {
  console.log("Pocetak posla glavne funkcije");
  callback();
  console.log("Kraj posla glavne funkcije");
}
glavnaFunkcija(function () {
  console.log("Ovo je radnja callback funkcije");
});
////////////////////////////////////////////////////////////
function glavnaFunkcija(callback) {
  console.log("Pocetak posla glavne funkcije");
  callback();
  console.log("Kraj posla glavne funkcije");
}
function pomocna() {
  console.log("ovo je radnja callback funkcije");
}

glavnaFunkcija(pomocna);
//////////////////////////////////////////////////////////
function glavnaFunkcija1(callback, prvi, drugi) {
  callback(prvi, drugi);
}
function pomoc(prvi, drugi) {
  console.log(prvi ** drugi);
}
glavnaFunkcija1(pomoc, 3, 4);
////////////////////////////////////////////
const main = (callback, num1, num2) => {
  return callback(num1, num2);
};
console.log(main((a, b) => a ** b, 3, 2));
///////////////////////////////////////////////
