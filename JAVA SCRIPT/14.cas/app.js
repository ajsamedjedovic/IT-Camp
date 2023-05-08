//drugi nacin
const zbirKvadrata = function (a, b) {
  if (a == b) {
    return "Povrsina kvadrata je :  " + a ** 2;
  } else {
    return "Povrsina pravougaonika je : " + a * b;
  }
};

console.log(zbirKvadrata(4, 5));

//Arrow function :
const kvadratBroja = (a) => {
  return a ** 2;
};
console.log(kvadratBroja(4));
//Ako Arrow function ima samo jedan parametar ,nije neophodno stavljati ga u zagradama
//Ako funkcija vraca neki jednostavan izraz (nije prethodno bilo dodatnog koda)mozemo izostaviti viticaste
//zagrade i return keyword.

const kvadratBroja2 = (a) => a ** 2;

// const broj = (a) => {
//   if (isNaN(a)) {
//     return "NISTE UNELI BROJ";
//   } else if (a < 0) {
//     return "UNET JE POZITIVAN BROJ";
//   } else if (a > 0) {
//     return "UNET JE POZITIVAN BROJ";
//   } else {
//     return "UNET JE BROJ 0";
//   }
// };
// a = prompt("unesite neki broj");
// console.log(broj(a));

/////////pravilan zadatak///
// function broj() {
//   a = prompt("unesite neki broj");

//   if (isNaN(a)) {
//     return "NISTE UNELI BROJ";
//   } else if (a < 0) {
//     return "UNET JE POZITIVAN BROJ";
//   } else if (a > 0) {
//     return "UNET JE POZITIVAN BROJ";
//   } else {
//     return "UNET JE BROJ 0";
//   }
// }
// broj();
// console.log(broj());

function poslovi(satnica, minuti) {
  if (satnica < 17 && satnica >= 9 && minuti < 60) {
    return "Poslali ste mejl u dobrom vremenu";
  } else {
    return "Niste poslali mejl u dobrom vremenu";
  }
}
console.log(poslovi(13, 23));
