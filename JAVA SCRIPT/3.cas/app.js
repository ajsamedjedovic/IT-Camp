// var
var x = 10;
console.log(x);
x = 14;
console.log(x);

var x = 25;
console.log(x);

// za sve promenjive definisane preko var keyword je moguce izvrsiti redeklaraciju(ponovno definisanje
// promennive) i reinicijalizaciju (dodeljivanje nove vrednosti) function scope promenjive

// let
let y = 26;
console.log(y);

// let y;

// za promenjive definisane sa let keyword moguce je vrsiti
// reinicijalizaciju(dodeljivanje vrednosti)ali kada govorimo o istom prostoru
// (scope)nece biti moguca redeklaracija(novo obezbedjivanje memorije u prostoru)

// let i const keyword nam obezbedjuju blok scope(dodatni prostor za definisanje promenjivih)
// promenjive tako definisane su block scope promenjive.
{
  let y = 50;
  console.log(y);
}
console.log(y);

// dakle u nekom block scope-u je moguce izvrsiti i reinicijalizaciju i redeklaraciju.

// const
//const w;!
// w = 49;!
const w = 17;
console.log(w);

// const w = 90;!!!!
// w = 40;!!!!
// console.log(w);!!!!

// dakle za promenjive definisane preko const(u istom prostoru) keyword  nije moguca reinicijalizacija i
// redeklaracija
{
  const w = 90;
  console.log(w);
}

// sve karakteristike koje vaze za promenjivu definisanu preko let,vaze i za promenjive definisane preko
// const keyword(kada govorimo o block scope)

const niz = [1, 2, 3, 4];
// niz[("sta", "kako")];!!
console.log(niz);
