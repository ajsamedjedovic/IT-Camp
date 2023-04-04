//za ispisanje vise brojeva koristimo PETLJU FOR
let a;
for (a = 1; a <= 10; a++) {
  console.log(a);
}

// statment 1 je blok koda koji se izvrsava samo na pocetjku, i prestavlja definisanje iteratora
// statment 2 je blok koda koji predstavlja uslov za izvrsavanje petlje
//statment 3 je blok koda koji predstavlja promenu vrednosti iteratora

for (a = 1; a <= 10; a++) {
  if (a !== 2 && a !== 5) {
    console.log(a);
  }
}

//continue keyword koristimo kada zelimo da izbegnemo neki slucaj i da se
//osvrnemo na narednu iteraciju
for (let a = 1; a <= 10; a++) {
  if (a === 2 || a === 5) {
    continue;
  } else {
    console.log(a);
  }
}

// break - koristimo kada zelimo da prekinemo petlju
let i;
for (i = 1; i < 11; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}
//ispisati sve parne brojeve do 20 na 2 nacina:
// prvi nacin
let x;
for (x = 1; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}
//drugi nacin
for (x = 2; x <= 20; x += 2) {
  console.log(x);
}

let y;
for (y = 1; y <= 20; y += 2) {
  console.log(y);
}
for (y = 1; y < 20; y++) {
  if (y % 2 === 0) {
    continue;
  } else {
    console.log(y);
  }
}
//////////////////////////////////////////////////////////////////////////
s = 0;
for (var v = 11; v < 20; v += 2) {
  s += v;
}
console.log(s);

s = 0;
for (let z = 1; z < 20; z++) {
  if (z % 2 != 0) {
  }
}
