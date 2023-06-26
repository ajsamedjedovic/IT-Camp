//concat() - mrtoda nam sluzi za spajanje dva ili vise niza.
const muskarci = ["Emir", "Selver"];
const devojke = ["Asija", "Dzana", "Ajsa", "Anastasija"];
// const celaGrupa = muskarci.concat(devojke, "Nedim", true, 6);
const celaGrupa = muskarci.concat(devojke, "Nedim");
//Argument metode ne mora biti niz.Moze biti i element koji ce se dodati na prethodno spojene nizove

console.log(celaGrupa);

//slice() - metoda vraca deo niza (onoliko elemenata koliko smo trazili slanjem argumenta-indeksa)
console.log(celaGrupa.slice(0, 2)); //Emir,Selver
console.log(celaGrupa.slice(-4, -1)); //Anastasija,Nedim,true
console.log(celaGrupa.slice(3)); //od 3 do kraja

//splice() - metoda vraca se koristi za dodavanje novih elemenata u nizu,brisanje i sve mozemo vrsiti na zeljenim
// pozicijama unutar niza

console.log(celaGrupa);
celaGrupa.splice(2, 0, "Merjem");
console.log(celaGrupa);
//Prvi argument metode predstavlja poziciju u nizu odakle zelimo promene.

//Drugi argument predstavlja broj elemenata u nizu koji trebaju da se izbrisu,krenuvsi od pozicije prvog elementa.

//Svi sledeci argumenti potencijalno predstavljaju nove elemente u nizu(vrednosti koje zelimo dodati na vec
// definisanoj poziciji).

//Primenom splice() metode  izbrisati sve devojke,zatim ih dodati na pocetku niza.

//splice() - metoda  vraca niz sa izbrisanim elementima.
dev = celaGrupa.splice(2, 5);
console.log(celaGrupa);

const novaGrupa1 = dev.concat(celaGrupa);
console.log(novaGrupa1);

novaGrupa1.splice(5, 0, "Ajla");
console.log(novaGrupa1);

novaGrupa1.splice(5, 2, "Dzevdet", "Tarik", "Marija", "Alem");
console.log(novaGrupa1);

novaGrupa1.splice(-3, 1, "Melida");
console.log(novaGrupa1);

//sort() - metoda vrsi sortiranje niza(abecedno)
console.log(novaGrupa1.sort());

//reverse() - metoda sortira niz od poslednjeg ka prvom elementu.
console.log(novaGrupa1.reverse());

//Za sortiranje niza od Z do A koristimo sort(), pa onda reverse()

const brojevi = [3, 4, 99, -99, 23, 32];
console.log(brojevi.sort());

//funkcija za sortiranje brojeva od najmanjeg ka najvecem
brojevi.sort(function (A, B) {
  return A - B;
});
console.log(brojevi);

//funkcija za sortiranje brojeva od najveceg ka najmanjem
brojevi.sort((A, B) => B - A);

console.log(brojevi);

//Sortiranje niza  u random redosledu:
brojevi.sort(function () {
  return 0.5 - Math.random();
});
console.log(brojevi);

//Napraviti  funkciju koja vraca najveci element nekog niza

brojevi.sort(function (A, B) {});
console.log(brojevi);
//Napraviti  funkciju koja vraca najmanji element nekog niza

function najmanjiClan(niz) {
  najmanji = niz[0];
  for (i = 0; i < niz.length - 1; i++) {
    if (niz[i] < najmanji) {
      najmanji = niz[i];
    }
  }
  return najmanji;
}

console.log(najmanjiClan([9, 10, 9, 0]));

niz = [1, 8, 10, 0];
niz.sort(function (A, B) {
  return A - B;
});
console.log(niz);
console.log(niz[0]);

// function najveciClan(niz) {
//   najveci = niz[0];
//   for (let i = niz[niz.length - 1]; i < niz[0]; i--) {
//     if (niz[i] > najveci) {
//       najveci = niz[i];
//     }
//   }
//   return najveci;
// }
// console.log(najveciClan([7, 11, 9, 0]));
// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
