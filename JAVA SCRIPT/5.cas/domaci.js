//1.zadatak
const prvi_broj = Number(prompt("unesite prvi broj"));
const drugi_broj = Number(prompt("unesite drugi broj"));
if (isNaN(prvi_broj) || isNaN(drugi_broj)) {
  console.log("vrednosti moraju biti brojevi");
} else if (prvi_broj <= 0 || drugi_broj <= 0) {
  console.log("niste uneli pozitivne brojeve");
} else if (prvi_broj === drugi_broj) {
  console.log("povrsina kvadrata je :", prvi_broj ** 2);
} else if (prvi_broj != drugi_broj) {
  console.log("povrsina pravougaonika  je :", prvi_broj * drugi_broj);
}
// 2.zadatak
const broj1 = Number(prompt("unesite prvi broj"));
const broj2 = Number(prompt("unesite drugi broj"));

switch (broj2) {
  case 0:
    console.log("deljenje nije moguce");
    break;
  default:
    console.log("resenje je:", broj1 / broj2);
}
