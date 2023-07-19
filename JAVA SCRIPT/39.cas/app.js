// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const parni = (arr1) => {
//   arr2 = arr1.filter((value) => value % 2 == 0);

//   suma = arr2.reduce((prvi, drugi) => prvi + drugi);
//   return suma;
// };
// console.log(parni(arr1));
// ///////////////////////////////////
// const parni2 = (arr) => {
//   const parni2 = arr.reduce((prvi, drugi) => {
//     if (prvi % 2 == 0) {
//       return prvi + drugi;
//     } else {
//       return prvi;
//     }
//   }, 0);
//   return suma;
// };
// console.log(parni2(arr1));
//!!!//

const arr0 = [1, 3, 3, 5, 5];
// //switch
// const najvisePojavljivan = (arr) => {
//   let jedan = 0;
//   let tri = 0;
//   let pet = 0;
//   const pomocni0 = arr.filter((item, index) => arr.indexOf(item) === index);
//   for (let i = 0; i < pomocni0.length; i++) {
//     for (let j = i; j < arr0.length; j++) {
//       console.log(arr0[i] + arr0[j]);
//       if (j === 1) {
//         jedan++;
//       } else if (j === 3) {
//         tri++;
//       } else if (j === 5) {
//         pet++;
//       }
//     }
//   }
// };
// console.log(najvisePojavljivan(arr0));

// // const arr11 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr11.length; i++) {
//   for (let j = i; j < arr11.length; j++) {
//     console.log(arr11[i], arr11[j]);
//   }
// }

function najcesciElement(arr) {
  let element;
  let brojac = 0;
  let brojPojavljivanja = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        brojac++;
      }
      if (brojac > brojPojavljivanja) {
        brojPojavljivanja = brojac;
        element = arr[i];
      }
    }
    brojac = 0;
  }
  return element;
}
console.log(najcesciElement(arr0));
console.log(najcesciElement([1, 2, 2, 3, 4, 5, 6, 2]));
