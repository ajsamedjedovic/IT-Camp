//Search metode:

//indexOf() metoda nam vraca poziciju karaktera (niza karaktera) koje smo poslali kao argument.
//Ako se argument nalazi vise puta unutar stringa dobijamo poziciju prvog pojavljivanja tog argumenta.

//Ako se argument ne nalazi unutar stringa rezultat ce biti -1.

const recenica = "Danas je lep dan";
console.log(recenica.indexOf("d"));
console.log(recenica.indexOf("dan"));
console.log(recenica.indexOf("noc"));
