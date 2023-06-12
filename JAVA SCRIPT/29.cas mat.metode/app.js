//Math.min(x,y,z...n) - vraca najmanji broj od proslednjenih

console.log(Math.min(20, 0, -1, 10));

//Math.max(x,y,z...n) - vraca najveci broj od prosledjenih
console.log(Math.max(20, 0, -1, 10));

//Nacin da dobijemo najmanji broj iz ponudjenog niza je da na vec
//postojecu metodu Math.min() ili Math.max() dodamo jos .apply(null,[1,2,3])
console.log(Math.min.apply(null, [20, 0, -1, 10]));

const niz = [20, 0, -1, 10];

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMax([-2, 0, 100, 10]));

//Math.random() - metoda vraca random broj izmedju 0(ukljucujuci) i 1(ne ukljucujuci).

//broj od 0 do 1.
console.log(Math.random());
// 0 ili 1.
console.log(Math.round(Math.random()));
//broj od 0 do 20.
console.log(Math.round(Math.random() * 20));
//broj od 50 do 100.
console.log(Math.round(Math.random() * 50) + 50);

//Math.log(x) - metoda vraca logaritam broja x za osnovu e.
//Math.log2(x) - metoda vraca logaritam broja x za osnovu 2.
//Math.log10(x) - metoda vraca logaritam broja x za osnovu 10.
