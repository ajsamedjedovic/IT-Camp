//Za ekstraktovanje (uzimanje jednog karaktera) mozemo iskoristiti jedan od 3 nacina
// 1. charAt(index)uzima jedan argument(koji predstavlja inddex) i vraca
//  nam karakter koji zauzima tu poziciju
//2. charCodeAt(index) metod koji uzima jedan argument(koji predstavlja inddex) i vraca
//  nam  kod karakter koji zauzima tu poziciju
// 3. string(index) nacin pristupa nekom karakteru iz stringa

let recenica = "Recenica za uzimanje karaktera.";

console.log(recenica.charAt(4));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(recenica.charAt(100)); //rezultat karaktera koji ne postoji daje prazan string
console.log(recenica[100]); //rezultat nepostejeceg karaktera je undefined

//Za ekstraktovanje (uzimanje nekoliko karaktera) mozemo iskoristiti jedan od 3 nacina:

//1. slice() metoda vraca deo stringa.Ima 2 argumenta,prvi argument je pocetni index od kojeg  uzimamo
//isecak,drugi element je index do kojeg idemo.
//Drugi argument se ne ukljucuje.On nije obavezan ako ga izostavimo ,dobicemo string od prvog
//argumenta do kraja.
//slice() omogucava koriscenje negativnih indeksa.

console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1));

// 2. substring()  metoda vraca deo stringa.Ima 2 argumenta,prvi argument je pocetni index od kojeg  uzimamo
//isecak,drugi element je index do kojeg idemo.Ne podrzava negativne indekse.
console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));

//3. substr()  metoda vraca deo stringa.Ima 2 argumenta,prvi argument je pocetni index od kojeg  uzimamo
//isecak,drugi element je  duzina tog isecka.
console.log(recenica.substr(3, 10));

//split()metoda nam sluzi da neki string pretvorimo u niz od jednog ili vise elemenata.

//Ako split metodu primenimo na neki string,bez da joj posaljemo argument,dobijamo niz od
// samo jednog elementa(cela recenica je taj element)
console.log(recenica.split());

//slanje nekog argumenta znaci da taj argument predstavlja karakter gde ce se deliti
//elementi niza
console.log(recenica.split(" ")); //svaka rec predstavlja jedan element niza
console.log(recenica.split("")); //svaki karakter predstavlja |-|

// function funkcija(string) {
//   const nizReci = string.split(" ");
//   let najduzaRec = nizReci[0];
//   for (let i = 0; i < nizReci.length; i++) {
//     if (nizReci[i].length > najduzaRec.length) {
//       najduzaRec = nizReci[i];
//     }
//   }
//   return najduzaRec.length;
// }
// console.log(funkcija(recenica));

//Domaci
let brojac = 0;

function funkcija1(broj) {
  for (let i = 0; i < broj; i++) {
    brojac += i.toString();
  }
  return brojac;
}
console.log(funkcija1(7));
