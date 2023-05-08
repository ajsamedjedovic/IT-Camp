//Aritmeticka sredina
//////////////
function aritmeticka(prvibroj = 0, drugibroj = 0, trecibroj = 0) {
  return "Aritmeticka sredina je:  " + (prvibroj + drugibroj + trecibroj) / 3;
}

console.log(aritmeticka(2, 2, 5));

//Zbir kvadrata
////////////////////////
function kv_zbir(broj1 = 0, broj2 = 0) {
  if (broj1 == NaN || broj2 == NaN) {
    console.log("Niste uneli brojeve");
  }
  return "Zbir kvadrata ta 2 broja je:  " + broj1 ** 2 + broj2 ** 2;
}
console.log(kv_zbir(6));

//Povrsina kvadrata/pravougaonika
////////////////////////////////////
function funkcija(a, b) {
  if (a < 0 || b < 0) {
    return "Niste uneli korektne brojeve", a + b;
  } else if (a == b) {
    return "Povrsina kvadrata je:  " + a ** 2;
  } else {
    return "Povrsina pravougaonika je:  " + a ** 2 + b ** 2;
  }
}
console.log(funkcija(5, 5));
