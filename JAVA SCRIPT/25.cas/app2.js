//number metode:

//toString() metoda vraca string(broj tipa string).
//Ova metoda se moze primeniti na bilo koji tip podataka.

let x = 144;
let y = x.toString();
console.log(typeof y);
console.log(y + 5);

//toFixed () metoda vraca broj zaukruzen na onoliko decimala koliki je argument poslat metodi.
z = 122.3494;
s = z.toFixed(2);
console.log(s);
console.log(typeof s);

//toPrecision() metoda vraca broj sa ukupnim brojem cifara koliki je argument poslat metodi.
//Dobijena vredonst je string.
let b = z.toPrecision(4);
console.log(b);
console.log(typeof b);

function funkcija1(A, B, A1, B1) {
  u_A = A + B;
  u_B = A1 + B1;

  if (u_A == u_B) {
    if (B < B1) {
      return "Pobednik je 2 takmicar";
    } else {
      return "Pobednik je 1 takmicar";
    }
  } else if (u_A < u_B) {
    return "Pobednik je 2 takmicar";
  } else {
    return "Pobendik je 1 takmicar";
  }
}

console.log(funkcija1(50, 50, 50, 50));
console.log(funkcija1(23, 32, 32, 23));

//prompt broj sekundi da pretvori u sat,minute,sekunde
//sat =60 min
// 1 sat 3600 sek
//min = 60 sek

//123

///pravougaonik od cetiri vrednsoti mogu da predstavlaju stranice za pravougaonik
