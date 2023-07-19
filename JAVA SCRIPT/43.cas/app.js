//Objekti su struktura podataka koja moze skladistiti vise vrednosti.
//Elementi su zapisani u key-value parovima.
//key-value(name-value) parovi u JavaScript objektima se zovu svojstva(properties).

const car = {
  type: "Fiat",
  model: 500,
  color: "white",
};

//Pristupanje nekoj vrednosti svojstva(property) mozemo izvrsiti na dva nacina:

//1.nacin//  obj.propertyName
console.log(car.type);

//2.nacin//  obj["propertyName"]
console.log(car["type"]);

const person = {
  firstName: "Ajsa",
  lastName: "Medjedovic",
  age: 18,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

//Objekti takodje mogu imati metode.
//Metode predstavljaju funkcije koje se izvrsavaju u objektu.

//U JavaScriptu this referencira(ukazuje) na neki objekat.
//this nije promenjiva vec rezervisana rec(keyword).
//Ne mozemo promeniti vredonst this.

const x = person;
console.log(x);

//Promena vrednosti svojstva:
person.firstName = "Aja";
console.log(person);

//Dodavanje novog svojstva:
person.adult = true;
console.log(person);
console.log(x);

//Brisanje svojstva objekta:
//Delete keyword brise i property name i value
//delete x["adult"] ili
delete x.adult;
console.log(x);

//Vrednost nekog svojstva u objektu moze biti objekat,niz..

//Od objekta mozemo dobiti niz pomocu metode  Object.value():
const personArr = Object.values(person);
console.log(personArr);

// dog

podStringovi = (string, arr) => {
  niz = [];
  for (i = 0; i < string.length; i++) {
    for (j = i; j < string.length; j++) {
      niz.push(string.slice(i, j + 1));
    }
  }
  return niz;
};
console.log(podStringovi("dog"));
