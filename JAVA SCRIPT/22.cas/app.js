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

const newString = (A, Z) => {
  let noviString = "";
  let i = 0;
  while (i < A.length) {
    if (A[i] !== Z) {
      noviString += A[i];
    }
    i++;
  }
  return noviString;
};
console.log(newString("Madagaskar", "a"));

// Domaci:
// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.
// function funkcija0(N, string) {
//   let novi_string = "";
//   for (i = string.length - 1; i > 0; i--) {
//     if (novi_string  N) {
//       novi_string += string[i];
//     }
//     return novi_string;
//   }
// }
// console.log(funkcija0("Pero ima devojku"));
//nije tacno

let string = "Pera";
console.log(string.split(""));
