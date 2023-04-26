// korisnik unosi 2 broja:
// na osnovu toga koji je broj manji.iteracija se vrsi od njega do veceg broja
// ispisuju se brojevi od manjeg ka vecem

let broj1 = +prompt("unesite jedan broj");
let broj2 = +prompt("unesite drugi broj");
if (isNaN(broj1) || isNaN(broj2)) {
  console.log("niste uneli korektne vrednosti");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    console.log(broj1);
    broj1++;
  }
} else if (broj2 < broj1) {
  while (broj2 <= broj1) {
    console.log(broj2);
    broj2++;
  }
} else {
  console.log("uneli ste iste brojeve");
}
