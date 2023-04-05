const prvi_broj = Number(prompt("unesite prvi broj"));
const drugi_broj = Number(prompt("unesite prvi broj"));
if (isNaN(prvi_broj) || isNaN(drugi_broj)) {
  console.log("niste uneli korektne brojeve");
} else if (prvi_broj > drugi_broj) {
  for (let i = drugi_broj; i < prvi_broj; i++) {
    console.log(i);
  }
} else if (prvi_broj == drugi_broj) {
  console.log("uneli ste iste brojeve");
} else if (drugi_broj > prvi_broj) {
  for (let i = prvi_broj; i < drugi_broj; i++) {
    console.log(i);
  }
}

switch (new Date().getDate()) {
  case 0:
    console.log("Ugodan vikend");
    break;

  case 1:
    console.log("radni je dan");
    break;

  //default:
  // console.log("Radni je dan");
  /////////////////////////////////////
  case 2:
    console.log("Radni je dan");
    break;

  case 3:
    console.log("radni je dan");
    break;

  case 4:
    console.log("radni je dan");
    break;

  case 5:
    console.log("radni je dan");
    break;

  case 6:
    console.log("Ugodan vikend");
    break;
}

// case 0:
// case 6:
//     console.log("radni je dan")

let n = Number(prompt("unesite broj n"));
let s = 0;
let p = 0;

for (i = 1; i < n; i++) {
  if (i % 5 == 0) {
    s += i;
    p += 1;
  }
}

console.log(s);
console.log(p);
