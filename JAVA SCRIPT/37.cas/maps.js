//map() - metoda  kreira novi niz,na nacin da se callback funkcija(argument map metode)izvrsava za svaki index.
//ova metoda ne menja originalni niz,vecpravi novi.
//Duzina tog novodobijenog niza je jednaka duzini originalnog niza.

const brojevi = [1, 2, 3, 4, 5, 6, 7];

const brojevi2 = brojevi.map(function (broj) {
  return broj;
});
console.log(brojevi2);

//Napraviti niz3 sa kvadratnim korenom elemenata

const brojevi3 = brojevi.map((broj) => {
  return Math.pow(broj, 2);
});

console.log(brojevi3);

const studenti = [
  "asija",
  "ajla",
  "selver",
  "nedim",
  "ajsa",
  "emir",
  "Merjem",
  "Anastasija",
];
const studenti2 = studenti.map((student) => {
  return student[0].toUpperCase() + student.slice(1);
});
console.log(studenti2);

const studenti3 = studenti.map((student, index) => {
  if (index < 3) {
    return student;
  }
});
console.log(studenti3);

const brojevii = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const brojevi0 = brojevi.map((broj, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return broj ** 2;
  } else {
    return broj;
  }
});
console.log(brojevi0);

const brojevi10 = brojevi.map((broj, arr, element, index) => {
  if (element % 2 === 0) {
    return broj ** 2;
  } else {
    return (+arr[index - 1] + broj + arr[index + 1]) / 3;
  }
});
console.log(brojevi10);
////////////?????//////
