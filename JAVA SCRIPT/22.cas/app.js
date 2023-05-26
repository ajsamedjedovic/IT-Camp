function funkcija(A) {
  let B = A.split(" ");
  const prva = B[0];
  const zadnja = B[B.length - 1];
  return prva.concat(" ", zadnja);
}
console.log(funkcija("Svuda podji , kuci dodji"));
///////////////////////////////////////////////////////////

function mojafunkcija(N, string) {
  if (N <= string.length) {
    let novaRec = string.slice(0, N);
    return novaRec;
  } else {
    return string;
  }
}
console.log(mojafunkcija(6, "Pera ima devojku"));
/////////////////////////////////////////////////////////
function funkcija1(N, M, string) {
  let NovaRec = string.substr(N, M);
  return NovaRec;
}
console.log(funkcija1(6, 7, "Pera ima devojku"));

// const B = "Madagaskar";
// console.log(B.replace(/a/g, ""));

const funk = (string, Z) => {
  let NovaRec = "";
  for (i = 0; i < string; i++) {
    if (i == Z) {
      continue;
    } else {
      NovaRec += string[i];
    }
  }
  return NovaRec;
};
console.log(funk("Madagaskar", "a"));
////nije dobro
