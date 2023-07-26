const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      //   return `${radnik.firstName} ${radnik.lastName} zivi u ${this.ulica} u ${this.grad}.`;
      return `${radnik.fullname()} zivi u ${this.ulica} u ${this.grad}.`;
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];
// Napraviti novi niz(punoletni) koji ce sadrzati one elemente (objekte) cija je starost veca od 17.

const punoletni = godine.filter((coek) => coek.starost > 17);
console.log(punoletni);
const punoletni2 = punoletni.map((coek) => coek.starost);
console.log(punoletni2);

// ... (spread) operator
// Spread operator nam sluzi za kloniranje niza ili objekta

const punoletni3 = [20, ...punoletni2, 30];
console.log(punoletni3);

const radnik2 = {
  ...radnik,
  firstName: "Tarik",
  lastName: "Hambelic",
};
console.log(radnik2);

const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17h free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (datum1, datum2) {
      const d1 = new Date(datum1);
      const d2 = new Date(datum2);
      const razlika = d2.getTime() - d1.getTime();
      const razlikaDana = razlika / (100 * 3600 * 24);
      console.log("brdana", razlikaDana);
      return razlikaDana * this.dnevnaKarta;
    },
  }, //!!nije tacno
};
console.log(automobil.garaza.platiZa());

//  2. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
//1.nacin
// library.sort((a, b) => a.title.localeCompare(b.title));
// console.log(library);

//2.nacin
const sortByTitle = (arr) => {
  const titleArr = arr.map((el) => el.title);
  titleArr.sort();
  const library2 = [];
  titleArr.forEach((title) => {
    const element = arr.find((obj) => obj.title === title);
    library2.push(element);
  });
  return library2;
};
console.log(sortByTitle(library));
