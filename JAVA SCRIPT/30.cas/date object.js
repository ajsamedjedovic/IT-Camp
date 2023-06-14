// DATE OBJECT//

//kreiranje datuma:
//U JavaScriptu datume kreiramo preko
//new Date
//konstruktora.

//Postoje 4 nacina za kreiranje Date objekta:
// 1. new Date()
console.log(new Date()); //dobili smo trenutni datum i vreme.
console.log(typeof new Date()); //tipa je object.

//2. new Date(year,month,day,hour,minutes,seconds,miliseconds)

console.log(new Date(2020, 1, 23, 17, 17, 17, 17));
//Napomena.Meseci se racunaju od 0 do 11.

//Mozemo poslati 7,6,5,4,3,2 argumenta  ako zelimo da dobijemo datum prema nasoj zelji.
console.log(new Date(2020, 1));

//3. new Date (miliseconds)

console.log(new Date(5241)); //1970/ 01/01/ - nulto vreme u  JavaScriptu (zero time)

//Java Script skladisti datume kao broj milisekundi od 1.1.1970.

//Ako prvi argument bude cifren ili dvocifren broj to znaci da se posmatra prethodni vek (dodaje se 19..)
console.log(new Date(22, 1, 23, 17, 17, 17, 17)); //1922.godina

//4. new Date(string)
console.log(new Date("2020-03-25"));

//Display date metode:

//Postoji nekoliko razlicitih metoda za prikazivanje datuma u razlicitim formatima:

// 1. toString()
const date = new Date();
console.log(date.toString());

// 2. toUTCString()
console.log(date.toUTCString());

// 3. toDateString()
console.log(date.toDateString());

//4 .toISOString()
console.log(date.toISOString());

//Date.parse() - vraca broj milisekundi izmedju nultog vremena i poslatog datuma

console.log(Date.parse(new Date()));

const anastasija = new Date(2005, 9, 25);
const ajsa = new Date(2005, 1, 7);

const brMsAjsa = Date.parse(ajsa);
const brMsAnastasija = Date.parse(anastasija);

console.log(brMsAjsa);
console.log(brMsAnastasija);

const razlika = brMsAjsa - brMsAnastasija;
const razlika_datum = new Date(razlika);
console.log(razlika_datum);

const dana = razlika / 1000 / 60 / 60 / 24;
console.log(dana);
