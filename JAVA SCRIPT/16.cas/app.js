const prom1 = "Sta ako zelimo da se ispise u \n dva odvojena reda";
console.log(prom1);
const prom2 =
  "Sta ako zelimo da se data recenica ispise u 2 odvojena reda kada kucamo , \
ali njen prikaz ce izgledati u jednom redu";
console.log(prom2);

// const prom3 =
//   "Sta ako zelimo da se data recenica ispise u 2 odvojena reda kada kucamo ,
// ali njen prikaz ce izgledati u jednom redu";
// console.log(prom3);

let br1 = 7;
let br2 = 13;
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + (br1 + br2));

//Resenje preko  BACK-TICKS

console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);
//Zapisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sintaksu.
//Zapisivanje stringova u vise redova je ispravna sintaksa kroz back-ticks navode

let recenica = "Zelimo zameniti rec 'promenjivo' sa recju 'lepse' ";

//replace() metoda menja specifican karakter (niz karaktera) nekim drugim (koji se salje kroz drugi argument)
//To se sve postize pravljenjem novog stringa
// console.log(recenica.replace("promenjivo", "lepse"));
let recenica2 = recenica.replace("promenjivo", "lepse");
console.log(recenica2);

let recenica3 =
  "Zelimo zameniti rec 'promenjivo' sa recju 'lepse'. Sta ako se rec promenjivo nadje na jos nekom mestu? ";

let recenica4 = recenica3.replace("promenjivo", "lepse");
console.log(recenica4);

//replace ()metoda menja samo prvi nadjeni argument u datom stringu
//Medjutim, koriscenjem regular expression mozemo zamenitidati argument gde god se nadje u stringu novim

//Regular Expression g (global) menja sve reci u stringu nekom novom
let recenica5 = recenica3.replace(/promenjivo/g, "lepse");
console.log(recenica5);

let recenica6 =
  "Zelimo zameniti rec 'PromenjivO' sa recju 'lepse'. Sta ako se rec promenjivo nadje na jos nekom mestu? ";

//Regular Expression i(insensitive)menja rec drugom bez obzira na njen zapis(bilo da je ispisana velikim
//  ili malim slovima)
let recenica7 = recenica6.replace(/promenjivo/gi, "lepse");
console.log(recenica7);

//toUpperCse() metoda pretvara ceo string u velika slova,bez obzira na to kako je
//prethodno ispisan i koliko ima karaktera
console.log(
  "Recenica koja je ispisana velika slova pomocu toUpperCase metode".toUpperCase()
);
console.log(
  "RECENICA KOJA JE ISPISANA VELIKA SLOVA POMOCU TOLowerCASE METODE".toLowerCase()
);

//concrat() metoda spaja dva ili vise stringova u jedan.
//Nismo ograniceni slanjem argumenata.
//Dodavanje sw vrsi onim redosledom kako saljemo argumente.

let a = "Prvi deo ";
let b = "drugi deo";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

//Sve metode za stringove prave novi string,ne vrsi se modifikacija postojeceg

function funkcija(recenica) {
  if (recenica.length > 9) {
    recenica1 = recenica.replace(/a/g, "B");
    return "Ovo je novodobijena recenica ".concat(recenica1);
  } else {
    return `${recenica}  ${recenica.length}  Recenica je nedovoljne duzine`;
  }
}

console.log(funkcija("Baba sam xsccdeeesdws"));
console.log(funkcija("Baba "));
