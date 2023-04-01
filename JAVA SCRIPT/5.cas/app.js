// za komunikaciju sa korisnikom koristimo prompt metodu
const ime = prompt("Unesite vase ime:");
console.log(ime);

const godine = prompt("unesite vase godine");
console.log(godine);
console.log(typeof godine);

//posto nam vrednost dobijena preko prompt uvek string,otuda potreba da taj string
// pretvorimo u number tip podatka:

//1.Number(string) - metoda

const godine_2 = Number(godine);
console.log(typeof godine_2);
console.log(godine_2);

// 2. +string => number
const godine_3 = +Number(godine);
console.log(typeof godine_3);
console.log(godine_3);

const visina = +prompt("unesite svoju visinu");
console.log(visina);
console.log(typeof visina);

console.log(isNaN("56"));
console.log(isNaN("djwndjw"));

//isNaN () ispituje da li je vrednost nekog broja NaN

//zadatak
const broj_Godina = +prompt("unesite vase godine");
if (isNaN(broj_Godina)) {
  console.log("niste uneli broj godina");
} else if (broj_Godina > 0 && broj_Godina < 12) {
  console.log("vi ste decijeg doba");
} else if (broj_Godina >= 12 && broj_Godina < 18) {
  console.log("maloletni ste");
} else if (broj_Godina >= 18 && broj_Godina < 40) {
  console.log("punoletni ste");
} else if (broj_Godina >= 40) {
  console.log("zrela ste osoba");
} else if (broj_Godina < 0) {
  console.log("niste uzeli poztivan broj godina");
}
//prazan string => number = 0
console.log(5 + "5");
console.log(5 - "4");
console.log(Number("")); //0

//JAVASCRIPT SWITCH NAREDBA
//naredbu koristimo kada imamo slucajeve koje preciziraju vrednost nekog izraza:

//  switch (izraz) {
//    case vrednost1:
// blok koda za izvrsavanje u slucaju da je izraz === vrednost1
//  break;
//    case vrednost2:
// blok koda za izvrsavanje u slucaju da je izraz === vrednost2
//      break;
//    default:
// blok koda za izvrsavanje u slucaju da  izraz:nije jednak prethodnim vrednostima
//  break (nije neophodan)
//  }
// break se ne sme izostavljati na kraju nekog slucaja ako ga izostavimo u slucaju koji
//   je zadovoljen,izvrsice se i  sledeci koji nije zadovoljen

//korisnik unosi broj:
///ako je uneo 12 i 15(ukljucuju se oba)nek se ispise poruka:"uneli ste vrednostBroja"
//defaultno :niste uneli broj istrazenog opseka

const broj1 = Number(prompt("unesite zeljeni broj iz segmenta [12,15]"));
switch (broj1) {
  case 12:
    console.log("uneli ste broj" + broj1);
    break;
  case 13:
    console.log(" uneli ste  broj" + broj1);
    break;
  case 14:
    console.log("uneli ste  broj" + broj1);
    break;
  case 15:
    console.log("uneli ste  broj" + broj1);
    break;
  default:
    console.log("niste uneli dobar broj" + broj1);
    break;
}
