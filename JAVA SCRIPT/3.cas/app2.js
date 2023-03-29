// OPERATORI
// postoji 6 vrsta operatora u JAVASCRIPTU

//Aritmeticki
// operatori dodele vrednosti
// String operatori
// Operatori poredjenja
// tipovni operatori
// logicki operatori
// 1. aritmeticki operatori
//  + , -, * , /,**(stepenovanje), %(modul,ostatak pri deljenju),--(decrement)(smanjenje za 1)
// ++(increment)(povecanje vrednosti  za 1)
y = 5;
y++; //y =y + 1;
console.log(y);

console.log(8 / 2);
// 2.Operatori dodele vrednosti:
//  = (dodeljivanje vrednosti)  -=  *=  /=  %=  **=  +=(dodavanje nove vrednosti na postojecu):
a = 5;
a += 5;
console.log(a);

// 3. String operatori:
// pored osnovne namene za sabiranje brojeva + operator sluzi i za spajanje stringova
console.log("prvi" + " cas");
console.log(5 + "25");
console.log(typeof (5 + "25"));
// sabiranje broja i stringa daje string

console.log(25 - "15");
console.log(5 * "5");
console.log(25 / "5");

// NaN (NOT A NUMBER) to je broj cija je vrednost nije korektna
// NaN je tipa broj
console.log(5 - "string");
console.log(typeof (5 * "string"));

// 4.Operatori poredjenja
//  == Proverava da li su jednake vrednosti 2 strane:
console.log(5 == 5);
console.log(5 == "5"); //imaju istu vrednosy ali je razlicit tip
console.log("leva" == "desna");

// === proverava jednakost tipa i vrednosti dve strane
console.log(5 === "5");
console.log(15 === 15);

// != Proverava razlicitost dve strane
console.log(5 != "5");
console.log(5 != 4);
// ako su razliciti onda je true,ako su isti false

//  !== Proverava razlicitost tipa ili vrednosti sa obe strane
console.log(5 !== "5");
console.log("sreda" !== "sreda ");

// > ,  < , <= , >=

// ?  Ternary operator

const isSunny = false;
const doINeedSunGlasses = isSunny ? "Da" : "Ne";
console.log(doINeedSunGlasses);

// 5.Logicki operatori
// && 'logicko i'
//kada moraju biti zadovoljeni svi poduslovi
console.log(5 === "5" && 4 <= 6); //false
console.log(5 == "5" && 4 <= 6); //true

//  || OR  ako je barem jedan uslov zadovoljen

console.log(5 === "5" || "sreda" == "Sreda"); //false
console.log(5 == "5" || "sreda" == "Sreda"); //true

// ! (Not) koji ce da bude suprotne vrednosti od promenjive
console.log(!isSunny); //true jer je bilo pre false

// 6.Tipovni operatori
// typeof operator ispitivanja tipa promenjive

// instanceof operator za ispitivanje da li neka promenjiva pripada odredjenom tipu
console.log(123 instanceof Object);
console.log(typeof [1, 2, 3]); //object
console.log([1, 2, 3] instanceof Array); //ture
