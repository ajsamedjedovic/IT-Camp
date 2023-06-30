//Java Array Iteration metode///

//Array Iterator metode prolaze kroz svaki element niza.

//forEach() - metoda poziva callback funkciju(koja predstavlja argument forEach metode jednom za svaki element niza).
const brojevi = [2, 4, 6, 8, 10, 12];
brojevi.forEach((element) => {
  console.log(element);
});

//Napomena: callback funkcija moze imati 3 argumenta (element,index,array)

niz = [1, 2, 3, 4, 5, 6, 7];
noviNiz = [];

niz.forEach((element) => {
  noviNiz.push(element);
});
console.log(noviNiz);
