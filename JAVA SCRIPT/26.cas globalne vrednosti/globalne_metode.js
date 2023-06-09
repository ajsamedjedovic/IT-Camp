//JavaScript Globalne meode
//globalne metode mozemo primeniti na bilo koji tip podataka:
//Pomenucemo najpoznatije globalne metode:
// 1.Number()
// 2.parseFloat()
//3.parseInt()

// 1 Number() - metoda vraca broj dobijen konovertovanjem argumenta

console.log(Number("string")); //NaN
console.log(Number("34")); //34

console.log(Number("  34 ")); //34 -Brise razmake sa strana prevodi sting u broj.

console.log(Number("34 56")); //NaN -Razmaci nisu  dozvoljeni.

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number([1, 2])); // NaN
console.log(Number([])); // 0
console.log(Number({})); // NaN

//2. parseFloat() -metoda vraca realan broj (sa decimalnim zapisom) dobijen konvertovanjen argumenta

console.log(parseFloat("string")); //NaN
console.log(parseFloat("34")); //34

console.log(parseFloat("  34.456 ")); //34.456

console.log(parseFloat("  34 ")); //-Brise razmake
console.log(parseFloat("  34   30 ")); // - 34 dozvoljeni su razmaci.Pasira samo prvu vrednost
console.log(parseFloat("  3asvdb 44 ")); // - 3 dozvoljeni su razmaci.Pasira samo prvu vrednost
console.log(parseFloat("  asvdb 44 ")); // - NaN dozvoljeni su razmaci.Pasira samo prvu vrednost

console.log(parseFloat(true)); // NaN
console.log(parseFloat(false)); // NaN

console.log(parseFloat([1, 2])); // 1 Parsira prvu vrednost prvog elementa niza
console.log(parseFloat([])); // NaN
console.log(parseFloat({})); // NaN

//2. parseInt() -metoda vraca realan broj (ceo) dobijen konvertovanjen argumenta

console.log(parseInt("string")); //NaN
console.log(parseInt("34")); //34

console.log(parseInt("  34.456 ")); //34
console.log(parseInt("  34.890 ")); //34

console.log(parseInt("  34 ")); //-Brise razmake
console.log(parseInt("  34   37 ")); // - 34 dozvoljeni su razmaci.Pasira samo prvu vrednost
console.log(parseInt("  3asvdb 44 ")); // - 3 dozvoljeni su razmaci.Pasira samo prvu vrednost
console.log(parseInt("  asvdb 44 ")); // - NaN dozvoljeni su razmaci.Pasira samo prvu vrednost

console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN

console.log(parseInt([1, 2])); // 1 Parsira prvu vrednost prvog elementa niza
console.log(parseInt([])); // NaN
console.log(parseInt({})); // NaN
