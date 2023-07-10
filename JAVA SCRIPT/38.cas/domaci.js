//3.
const third = (arr) => {
  const arr2 = arr.filter((value) => typeof value === "number " && value > 2);
  const arr3 = arr2.map((value) => {
    if (value < 8) {
      return value * 2;
    } else {
      return value * 7;
    }
  });
  return arr3.filter((value) => value < 10);
};
console.log(third([1, 2, 3, 5, 7, 9, 11]));

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 15];
//5.cas
const fifth = (arr1, arr2) => {
  const longerArr = arr1.length > arr2.length ? arr1 : arr2;
  const shorterArr = arr2.length >= arr1.length ? arr1 : arr2;
  const arr3 = longerArr.map(
    (value, index) => value + (shorterArr[index] || 0)
  );
  return arr3;
};
console.log(fifth(array1, array2));
console.log(fifth(array2, array1));
