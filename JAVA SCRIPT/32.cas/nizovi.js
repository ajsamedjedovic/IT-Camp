//NIZOVI (Array)//
//Nizovi u JavaScriptu predstavlja strukturu podataka za skladistenje vise vrednosti.
//Dakle,unutar jedne  promenjive(jednog niza) mozemo imati vise razlicitih ili istih vrednosti.
//Nizovi dozvoljavaju duplikate

//Nizovi su heterogeni(unutar jednog niza mozemo imati elemente razlicitih tipova).

const niz = ["string", 5, true];
console.log(niz);

//Mozemo prvo samo kreirati niz a nakon toga mu dodeliti elemente.
const cars = [];
cars[0] = "Audi";
cars[1] = "Mercedes";

console.log(cars);
cars[3] = "Audi";

console.log(cars);
console.log(cars[2]); //undefined

//length metoda vraca broj elemenata nekog niza.

console.log(cars.length);

//Promena vrednosti nekog elementa se moze vrsiti na isti nacin:
cars[2] = "Passat";

console.log(cars);

//Niz mozemo napraviti i ovako:
const cars1 = new Array("Audi", "Audi");
console.log(cars1);

//Primer zbog kojeg treba izbegavati new Array():
//Napraviti niz od jednog elementa tipa number.
const points = [44];
console.log(points);

const points1 = new Array(44);
console.log(points1); //44 praznih polja.

//Zbog jednostavnosti,citanja i brzine izvrsavanja,najbolje je koristiti [] nacin nego new Array.

const arr = [[1, 2, 3], new Date(), false, function () {}];
console.log(arr);

//Postoje 2 nacina za proveru da li je neka promenjiva niz ili ne:
//1. Array.isArray(arr)
const num = 3;
const fruit = ["Ananas", "Banana"];
console.log(Array.isArray(fruit));
console.log(Array.isArray(num));

//2. instanceof Array
console.log(fruit instanceof Array);
console.log(num instanceof Array);

fruit[fruit.length] = "Apple";
console.log(fruit);

//Zadaci
function funkcija() {
  let input = prompt("Unesite nesto");
  if (Array.isArray(input)) {
    return "Niz je";
  } else {
    return "Nije niz";
  }
}
console.log(funkcija(0));
