const isSunny = true;
if (isSunny) {
  console.log("Napolju je suncano");
} else {
  console.log("Napolju nije suncano");
}

//Postoji 8 FALSY vrednosti,to su:
// 1.FALSE
// 2. ""
// 3.  0
// 4. -0
// 5. 0n
// 6. NaN (number tip podatka)
// 7. undifined
// 8. Null

function isThruty() {
  const userinput = prompt("Unesite neku poruku:");

  if (userinput) {
    return "Uneta je Thrusty vrednost";
  } else {
    return "Uneta je Falsy vrednost";
  }
}
console.log(isThruty());

////////////////////////////ako korisnik unosi broj:
function isThruthyNumber() {
  const vrednost = +prompt("Unesite neki broj");

  if (vrednost) {
    return "Uneli ste Thrusty vrednost";
  } else {
    return "Uneli ste Falsy vrednost";
  }
}
console.log(isThruthyNumber());

//trazi se unos od strane korsnika sve dok ne unese bilo sta
let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu");
}
console.log(recenica);
