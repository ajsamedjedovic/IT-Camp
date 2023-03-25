// Neku poruku u JavaScript mozemo prikazati na vise macina:

// 1. innerHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "1. NACIN ISPISA";

// 2. document.write =obicno se koristi za testiranje koda

// 3.Alert() = Upozorenje korisniku:

alert("jos jedan nacin prkazivanja poruke");

// 4.console.log() - prikazivanje nekih informacija u konzoli.Najcesce koriscen metod

console.log("poruka u konzoli");

// javaScript nazivi promenjivih
// ime promenjive  u JavaScriptu mora poceti:

// 1. velikim i malim slovima
// 2. $(dollar sign)
// 3. _(donja crta)

// broj moze biti sadrzen u nazivu promenjive .ali promenjiva ne moze da pocinje brojem

// javaScript je case sensitive-(razlikuje mala i velika slova)
// //////////////////////////////////////////////////////////////////////////////////////
// a = 10;
// console.log(A);  error-A is not difined
// console.log(a); = 10

// zapisivanje promenjivih koje sadrze 2 ili vise reci:
vecernji_termin = 19.3;
// Underscore
VecernjiTermin = 20.05;
// Pascal Case
vecernjiTermin = 20.3;
// Lower Camel Case

// deklaracija i inicijalizacija
// postoje 4 nacina za deklarisanje promenjive u JavaScriptu:

// 1. koriscenjem var rezervisane reci (keyword)Vise se ranije koristila

var a; //deklarisanje promenjive (obezbedjivanje lokacijske memorije za
// promenjivu a)
a = 10; //inicijalizacija promenjive(dodeljivanje vrednosti vec deklarisanoj promenjivoj a)
// conslole.log(a)

var a = 10; //kroz jednu liniju koda mozemo izvrsiti deklaraciju i inicijalizaciju

//2. nacin koriscenjem let rezervisane reci (keyword).Promenjive koje su sklone menjanju vrednosti

// let b;
// b = 14;
// console.log(b);

let b = 14;
console.log(b);

// 3.nacin const rezervisane reci (keyword)
// nije moguca posebna deklaracija i inicijalizacija za promenjive definisane preko const keyword
// const c;
// c = 20;

// neophodno je izvrsiti ih u jednoj liniji koda
const c = 20;
console.log(c);

// 4. koriscenje nicega
d = 5;
console.log(d);
