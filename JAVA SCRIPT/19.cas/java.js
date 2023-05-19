//Search metode:

//indexOf() metoda nam vraca poziciju karaktera (niza karaktera) koje smo poslali kao argument.
//Ako se argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.

//Ako se argument ne nalazi unutar stringa rezultat ce biti -1.

const recenica = "Danas je lep dan.";
console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));

//lastIndexOf() metoda  nam vraca poslednju poziciju karaktera (niza karaktera) koje smo poslali kao argument.
////Ako se argument nalazi vise puta unutar stringa dobijamo poziciju poslednjeg pojavljivanja tog argumenta.
//Ako se argument ne nalazi unutar stringa rezultat ce biti -1.
console.log(recenica.lastIndexOf("dan"));
console.log(recenica.lastIndexOf("lep"));
console.log(recenica.lastIndexOf("noc"));
//Obe metode prihvataju drugi argument,koji oznacava poziciju od koje pocinje trazenje
//Napomena:Brojac se ne restartuje,ako krecemo od drugog argumenta da trazimo , i brojanje ide od drugogog argumenta.
console.log(recenica.indexOf("dan", 6));
console.log(recenica.indexOf("danas", 6));

//search () metoda takodje vraca poziciju trazenog stringa,sa tim sto kod ove metode ne mozemo poslati drugi element.
console.log(recenica.lastIndexOf("dan"));

//startsWith() metoda proverava da li neki string pocinje argumentom koji joj saljemo,vraca boolean(True ili False)
//Opciono mozemo poslati drugi argument koji ce da bude index od kojeg zelimo da trazimo poziciju tog stringa.
console.log(recenica.startsWith("danas"));
console.log(recenica.startsWith("je", 6));

//endsWith() metoda proverava da li neki string zavrsava argumentom koji joj saljemo,vraca boolean(True ili False)
//Opciono mozemo poslati drugi argument koji predstavlja ukupnu duzinu posmatranja datog stringa

console.log(recenica.endsWith("dan"));
console.log(recenica.endsWith("dan."));
console.log(recenica.endsWith("dan", 15)); //false
console.log(recenica.endsWith("dan", 16)); //true

function funkcija(string, Pstring, Kstring) {
  // return string.slice(Pstring, Kstring + 1);
  return string.substr(Pstring, Kstring + 1 - Pstring);
}
console.log(funkcija("Hello, World!", 7, 11));
/////////////////////////////////////////////////////////////
function funkcija2(string, Pstring, Kstring) {
  let Nstring = "";
  for (i = Pstring; i <= Kstring; i++) {
    Nstring += string[i];
  }
  return Nstring;
}
console.log(funkcija2("Hello, World!", 7, 11));
