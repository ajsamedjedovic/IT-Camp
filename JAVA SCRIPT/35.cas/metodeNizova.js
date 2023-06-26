const fruits = ["strawberry", "pear", "apple", "Mango", "pear"];

//indexOf() - metoda trazi u nizu odredjeni argument i vraca poziciju istog.
//takodje ona vraca -1 za argument koji se ne nalazi u nizu.

//Ako se neki argument nalazi vise puta u nizu,metoda vraca njegovo prvo pojavljivanje.

console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("pineapple"));

//lastIndexOf() - metoda trazi u nizu odredjeni argument i vraca poslednju poziciju istog.
//takodje ona vraca -1 za argument koji se ne nalazi u nizu.

console.log(fruits.lastIndexOf("pear"));
console.log(fruits.lastIndexOf("pineapple"));

//includes() - metoda vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

console.log(fruits.includes("Mango"));
console.log(fruits.includes("pineapple"));

//Array.from() - metoda  vraca niz od poslatog argumenta(argument moze biti bilo koji objekat sa length svojstvom)
const arr = Array.from("ABCDEF"); // ['A','B','C','D','E','F']
console.log(arr);

function funkcija(string, A, B) {
  nova = "";
  for (let i = 0; i < string.length; i++) {
    A = string[i];
    B = string[i + 1];
    if (A % 2 == 0 && B % 2 === 0) {
      nova += string[i] + "-";
    } else {
      nova += string[i];
    }
  }
  return nova;
}
console.log(funkcija("025468"));
