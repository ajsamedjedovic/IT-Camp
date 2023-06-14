//Napisati funkciju koja nalazi NZD za dva zadata parametra
function funkcija(prvi, drugi) {
  const manji = prvi > drugi ? drugi : prvi;
  let NZD = 1;
  for (let i = manji; i > 1; i--) {
    if (prvi % i === 0 && drugi % i === 0) {
      NZD = i;
      break;
    }
  }
  return NZD;
}
console.log(funkcija(8, 12));

//NZS
function funkcija1(br1, br2) {
  const veci = br1 > br2 ? br2 : br1;
  let NZS = veci;
  let i = veci;
  while (true) {
    if (i % br1 === 0 && i % br2 === 0) {
      NZS = i;
      break;
    }
    i++;
  }
  return NZS;
}
console.log(funkcija1(3, 4));
