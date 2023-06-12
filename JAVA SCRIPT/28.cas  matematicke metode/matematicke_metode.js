//Math methods//

//Sintaksa za bilo koju matematicku metodu je sledeca:
///Math.method(number)

//Number to integer//

//1.Math.round(x) - metoda vraca  blizi ceo broj broju x.
console.log(Math.round(1.11111234));

//2.Math.ceil(x) - vraca sledeci ceo broj broja x.
console.log(Math.ceil(1.11111234));
console.log(Math.ceil(-3.11111234));

//3. Math.floor(x) - vraca prethodni ceo broj broja x.
console.log(Math.floor(4.11111234));
console.log(Math.floor(-4.11111234));

//4. Math.trunc(x) - vraca ceo broj odstranjajuci decimalni ostatak.
console.log(Math.trunc(100.11111234));

//Math.sign() - metoda vraca:
//1. ako je pozitivan broj.
// 0. ako je  broj 0.
// -1 ako je negativan broj.

console.log(Math.sign(-9));

console.log(Math.sign(9));

//Math.pow(x,y) - vraca broj x stepenovan brojem y.
console.log(Math.pow(2, 3));
console.log(Math.pow(6, 2));

//Math.sqrt(x) - vraca kvadratni koren broja x.
console.log(Math.sqrt(25));

//Math.abs(x) - vraca apsolutnu vrednost broja x.

//Math.sin(x) -vraca sinus(vrednost izmedju -1 i 1) nekog ugla x (dat u radijanima).
console.log(Math.sin(Math.PI / 2));

//Math.cos(x) -vraca kosinus(vrednost izmedju -1 i 1) nekog ugla x (dat u radijanima).
console.log(Math.cos(Math.PI));
