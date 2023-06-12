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

function funkcija(prvi, drugi) {
  let op1 = 0;
  let op2 = 0;

  for (let i = 40; i < 60; i++) {
    if (i === prvi || i === drugi) {
      op1++;
    }
  }
  for (let i = 70; i < 100; i++) {
    if (i === prvi || i === drugi) {
      op2++;
    }
  }
  if (op1 > 0 && op2 > 0) {
    return true;
  } else if (op1 == 2 || op2 == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(funkcija(77, 55));
console.log(funkcija(1, 55));
console.log(funkcija(55, 75));
console.log(funkcija(1, 75));
console.log(funkcija(1, 5));
console.log(funkcija(77, 89));
console.log(funkcija(55, 44));

// 2.zadatak

function funk(prvi, drugi) {
  for (let i = 0; i < 100; i++) {
    if (prvi === drugi) {
      return "brojevi su isti";
    } else if (i == prvi) {
      return "prvi je " + prvi;
    } else {
      return "prvi je " + drugi;
    }
  }
}
console.log(funk(89, 89));
