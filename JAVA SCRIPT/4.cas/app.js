//  kondicionali:

if ("prvi uslov") {
  //blok koda koji ce da se izvrsava ako taj prvi uslov bude zadovoljen
} else if ("novi uslov") {
  //blok koda koji ce da se izvrsava ako taj drugi uslov bude zadovoljen
} else {
  //blok koda koji ce se izvrsiti u slucaju da sve prethodno mije  zadovoljeno
}

// const broj_godina = 18;

// if (broj_godina >= 18) {
//   console.log("punoletni ste");
// } else {
//   console.log("maloletni ste");
// }

let x = 5;
let y = 0;

if (y != 0) console.log(x / y);
else {
  console.log("deljenje je nemoguce.");
}

var broj_Godina = 2;

if (broj_Godina < 12) {
  console.log("vi ste decijeg doba");
} else if (broj_Godina >= 12 && broj_Godina < 18) {
  console.log("maloletni ste");
} else if (broj_Godina >= 18 && broj_Godina < 40) {
  console.log("punoletni ste");
} else if (broj_Godina >= 40) {
  console.log("zrela ste osoba");
}
