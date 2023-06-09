function funkcija1(br, br2) {
  let brojac = Math.abs(br - 100);
  let brojac2 = Math.abs(br2 - 100);
  if (brojac === brojac2) {
    return "jednako su udaljeni " + br + "i" + br2;
  } else if (brojac > brojac2) {
    return br2 + " je blizi broju 100 od " + br;
  } else {
    return br + " je blizi broju 100 od " + br2;
  }
}
console.log(funkcija1(98, 56));

//domaci da li su dva broja u opseku 40 do 60 ili 70 i 100.true oba su u barem jedmon,false nijedan u nijednom

//veci broj u opseku od 40 do 60
