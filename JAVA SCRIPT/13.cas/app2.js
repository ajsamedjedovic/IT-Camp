let username = "";
while (username.length < 6) {
  username = prompt("unesite ispravan username");
  console.log(username, username.length);
}
//DRY

//Funkcije predstavljaju deo koda koji ce se izvrsiti samo u slucaju njihovog pozivanja.
//koristimo ih da bi nas kod bio reusable(isti kod resava vise problema slicnog tipa.)

//Funkciju mozemo napraviti na dva nacina:
//1. Preko function keyword:
//2. Preko Arrow function;

//1.
function myFunc() {
  //kod unutar funkcije
}

//2.nacin
const myFunc2 = () => {
  //kod unutar funkcije
};

function greeting(parametar1, parametar2) {
  console.log("Zdravo");
}
//pozivanje funkcije
greeting();

//Prilikom definisanja funkcije mozemo joj proslediti parametre koji su neophodni
//za izvrsavanje koda date funkcije
//Dok prilikom pozivanja funkcije to sto saljemo funkciji zovu se argumenti

function greeting2(ime) {
  console.log("Zdravo  " + ime);
}
greeting2("Tarike");

function zbir_tri_i_pet() {
  const prom1 = 3;
  const prom2 = 5;
  //kada se izvrsi cela logika funkcije ,krajnji rezultat treba vratiti return keyword (rezervisanoj reci)
  return prom1 + prom2;
  // console.log("nesto ") kod koji se nadje nakon return u function scope se nece primeniti
}

function zbir(broj1, broj2) {
  return broj1 + broj2;
}
//za ispisivanje u konzoli
console.log(zbir(3, 5));

// dodeljivanje  defoltne vrednosti moze se izvrsavati na 2 nacina
//1.nacin
function z(broj1, broj2) {
  if (broj2 == undefined) {
    return broj1;
  } else {
    return broj1 + broj2;
  }
}
console.log(z(6));

//2.nacin

function zbirDvaBroja(broj1, broj2 = 0) {
  return broj1 + broj2;
}
console.log(zbirDvaBroja(16));
console.log(zbirDvaBroja(16, 4));
