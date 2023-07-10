arr1 = [1, 2, 3, 4, 5, 6, 7];
const parni = (arr1) => {
  arr2 = arr1.filter((value) => value % 2 == 0);

  suma = arr2.reduce((prvi, drugi) => prvi + drugi);
  return suma;
};
console.log(parni(arr1));
///////////////////////////////////
const parni2 = (arr) => {
  const suma = arr.reduce((prvi, drugi) => {
    if (prvi % 2 == 0) {
      return prvi + drugi;
    } else {
      return prvi;
    }
  }, 0);
  return suma;
};
console.log(parni2(arr1));
//!!!//

const arr0 = [3, "a"];

const najvisePojavljivan = (arr) => {
  br1;
  for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      console.log(i, j);
    }
  }
};
