//Proveravanje da li 4 vredonsti mogu biti stranice pravougaonika://
// function funkcija() {
//   const a = +prompt("Unesite prvu stranicu");
//   const b = +prompt("Unesite drugu stranicu");
//   const c = +prompt("Unesite trecu stranicu");
//   const d = +prompt("Unesite cetvrrtu stranicu");
//   if (
//     ((a == b) == c) == d ||
//     (a == b && c == d) ||
//     (a == c && b == d) ||
//     (a == d && b == c)
//   ) {
//     return "Moguce je formirati pravougaonik";
//   } else {
//     return "nije moguce formirati pravougaonik";
//   }
// }

// console.log(funkcija());

//Sekunde da pretvorimo u minute i sate:
function funk(sek) {
  const sat = Math.floor(sek / 3600);
  const minuti = Math.floor(sek % 3600) / 60;
  const sekunde = sek % 60;
  return sat + minuti + sekunde;
}
console.log(funk(4000));

//ZADACI NE RADE DOBRO///

// 1.//Napraviti funkciju koja:
// a) pretvara km u m
// b) pretvara inch u cm

function funkcija1(km) {
  m = km * 1000;
  return m;
}
console.log(funkcija1(1.5));

//2./Napisati funkciju koja proverava da li je broj poliendrom

//3. Napraviti funkciju koja ocekuje trocifren broj , a vraca dvocifren (iskljuci cifru desetice)
