console.log(7 === 77);
console.log(typeof (7 === 77));
console.log(Boolean(7 === 77));
console.log(5);
console.log(Boolean(5));

//VREDNOSNI I REFERENTNI TIPOVI PODATAKA//////////
//(osnovni ili slozeni)
//(primitivni i neprimitivni)

//Primer vrednosnog tipa podataka:
let rec = "danas";
let drugaRec = rec;

console.log(drugaRec);
console.log(rec);

drugaRec += " je bilo  grozno vreme";

console.log(drugaRec); //danas je bilo grozno vreme
console.log(rec); //danas

//Primer referentnog tipa podataka:

const niz = [1, 2, 3];
console.log(niz);
const drugiNiz = niz;
console.log(drugiNiz);

drugiNiz.pop(); //brise poslednji element niza
console.log(drugiNiz);
console.log(niz);
