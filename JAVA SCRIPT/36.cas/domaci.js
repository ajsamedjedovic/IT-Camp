function parniIndexi(niz) {
  const noviNiz = [];
  for (i = 0; i < niz.length; i++) {
    if (niz.indexOf(i) % 2 == 0) {
      // i+2
      noviNiz.push(niz[i]);
    } else {
      continue;
    }
  }
  return noviNiz;
}
console.log(parniIndexi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
// console.log(parnIndexi([1, 2, 3, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
///?
function parniBrojevi(niz) {
  const noviNiz = [];
  const noviNiz2 = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      noviNiz.push(niz[i]);
    } else {
      continue;
    }
  }
  return noviNiz;
}
console.log(parniBrojevi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function neparniBrojevi(niz) {
  const noviNiz = [];
  const noviNiz2 = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      continue;
    } else {
      noviNiz.push(niz[i]);
    }
  }
  return noviNiz;
}
console.log(neparniBrojevi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/////////////////////////////////////////////////
function pozitivniBrojevi(niz) {
  const noviNiz = [];

  for (i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      noviNiz.push(niz[i]);
    } else {
      continue;
    }
  }
  return noviNiz;
}
console.log(pozitivniBrojevi([1, 2, 3, 4, 5, -6, -7, 8, 9, 10]));
////////////////////////////////////////////////////////////////////////
function uString(niz) {
  let string = "";
  const noviNiz2 = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] === niz[niz.length - 1]) {
      string += niz[i];
    } else {
      string += niz[i] + "*";
    }
  }
  return string;
}

console.log(uString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/////////////////////////////////////////////////////////////////////////
