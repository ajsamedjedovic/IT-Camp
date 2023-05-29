// function funkcija(String) {
//   let novi_string = "";
//   let string1 = String.split("");
//   for (i = 0; i < string1.length; i += 2) {
//     novi_string += string1.replace(string1[i], string1[i + 1]);
//     // novi_string += string1.replace(string1[i + 1], string1[i]);
//   }
//   return novi_string;
// }
// console.log(funkcija("Pera ima devojku"));
// /////////////////////////////////////////////////////////////
// function funkcija1(string) {
//   let novistring = "";
//   for (i = 0; i < string.length; i++) {
//     if (novistring.length % 2 == 0 && i == string.length - 1) {
//       novistring += string[i];
//     } else if (i % 2 !== 0) {
//       novistring += string[i - 1];
//     } else if (i % 2 == 0) {
//       novistring += string[i + i];
//     }
//     return novistring;
//   }
// }
// console.log(funkcija1("Pera ima devojku"));

// function funkcija2(A, B) {
//   let glavni = "";
//   for (i = 0; i < A.length; i += 1) {
//     if (glavni[i] % 2 == 0) {
//       glavni[i];}
//     else if ()
//     }
//   }
// }
function fun(A, B) {
  duzina = A.length > B.length ? A.length : B.length;
  let n_string = "";
  for (let i = 0; i < duzina; i++) {
    if (A[i] === undefined) {
      n_string += B[i];
    } else if (B[i] === undefined) {
      n_string += A[i];
    } else {
      n_string += A[i] + B[i];
    }
  }
  return n_string;
}
console.log(fun("PERA", "sladoled"));
