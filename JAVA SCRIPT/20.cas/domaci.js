function funkcija(recenica) {
  niz1 = recenica.split(" ");
  return niz1.length;
}
console.log(funkcija("Dobar dan"));
/////////////////////////////////////////////////////////////
const first = (recenica) => recenica.split(" ").length;
console.log(first("koliko je g"));
//////////////////////////////////////////////////////////////
function funkcija1(tekst) {
  tekst2 = "";
  for (i = tekst.length - 1; i >= 0; i--) {
    tekst2 += tekst[i];
  }
  return tekst2;
}
console.log(funkcija1("ajsa"));
///////////////////////////////////////////////////////////////
const second = (string) => {
  let noviString = " ";
  for (i = string.length - 1; i >= 0; i--) {
    noviString += string[i];
  }
  return noviString;
};
console.log(second("ajsa"));
//////////////////////////////////////////////////////////////
function funkcija2(recenica2) {
  let brojac = 0;
  for (i = 0; i < recenica2.length; i++) {
    if (!isNaN(recenica2[i]) && recenica2[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}
console.log(funkcija2("Ajsa je 890 0"));
////////////////////////////////////////////////////////////////
