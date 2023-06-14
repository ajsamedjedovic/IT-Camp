// function funkcija() {
//   korisnik1.split() = prompt("Unesite ime korisnika");
//   korisnik2.split() = prompt("Unesite ime korisnika");
//   korisnik3.split() = prompt("Unesite ime korisnika");
//   korisnik4.split() = prompt("Unesite ime korisnika");
//   korisnik5.split() = prompt("Unesite ime korisnika");
// return korisnik1
// }
// console.log(funkcija())

function funkcija1(r) {
  obim = 2 * r * Math.PI;
  return Math.round(obim);
}
console.log(funkcija1(2));

//Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate kordinate krajnjih tacaka
function funkcija(a1, a2, b1, b2) {
  d = Math.sqrt((a1 - a2) ** 2 + (b1 - b2) ** 2);
  return d;
}
console.log(funkcija(1, 1, 1, 1));

// //Domaci:
// 1.povrsina kruga,gde precnik predstavlja argument

//2.Pretvraranje radijana u stepene

function funkcija(radijan) {
  stepen = (radijan * 180) / Math.PI;
  return "u stepenima je" + stepen;
}

console.log(funkcija(Math.PI));

function funkcija2(R) {
  return "Obim kruga je" + R ** 2;
}
console.log(funkcija2(10));
