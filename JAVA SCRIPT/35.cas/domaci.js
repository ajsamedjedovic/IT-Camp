const grupa = [
  "Tarik",
  "Selver",
  "Nedim",
  "Merjem",
  "Melida",
  "Marija",
  "Dzevdet",
  "Dzana",
  "Asija",
  "Anastasija",
  "Ajsa",
];
const novaGrupa = [];
for (let person of grupa) {
  if (
    person === "Tarik" ||
    person === "Marija" ||
    person === "Melida" ||
    person === "Dzevdet"
  ) {
    continue;
  } else {
    novaGrupa.push(person);
  }
}
console.log(novaGrupa);

const devojke = [];
const muskarci = [];
for (let person of novaGrupa) {
  if (person[person.length - 1] === "a" || person === "Merjem") {
    devojke.push(person);
  } else {
    muskarci.push(person);
  }
}
console.log(devojke);
console.log(muskarci);

/////////////////////////
minimum = Math.min.apply(null, [1, 3, 5, 7, -2]);
console.log(minimum);

maximum = Math.max.apply(null, [1, 3, 5, 7, -1]);
console.log(maximum);

///////////////////////////////////////////////////////
