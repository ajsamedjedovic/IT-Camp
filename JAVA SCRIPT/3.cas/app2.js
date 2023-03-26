// OPERATORI
// postoji 6 vrsta operatora u JAVASCRIPTU

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
// 5.Logicki operatori
// 6.Tipovni operatori
