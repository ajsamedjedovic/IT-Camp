//  includes() metoda vraca boolean u zavisnosti od toga da li se argument nalazi u stringu na
//kojem se primenjuje metoda ili ne.
//Opciono,drugi argument predstavlja poziciju od koje cemo traziti argument u stringu.

const recenica = "Dobar dan!";
console.log(recenica.includes("vece"));
console.log(recenica.includes("dan"));

const recenica2 = "Na koliko ste casova bili u skoli danas";

//match() metoda vraca niz.U zavisnot od toga u kojem obliku smo poslali argument dobijamo razlicite nizove.

console.log(recenica2.match("a")); //niz sa informacijama vezane za argument i string na kojem je primenjena metoda.
console.log(recenica2.match(/a/g)); //niz sa elementima iste vredonsti(ima ih onoliko koliko se argument puta
//pojavljuje u stringu).
console.log(recenica2.match(/agfg/g)); //Ako posaljemo argument koji se ne nalazi u stringu dobijamo null.

function funkcija(string) {
  if (!string.match(/Ko osvaja/g)) {
    return "Nismo nasli dati string";
  } else if (string.match(/Ko osvaja/g).length === 1) {
    return string.indexOf("ko osvaja");
  } else {
    return (
      "Pozicija prvog pojavljivanja" +
      string.indexOf("ko osvaja") +
      "\n" +
      "Pozicija poslednjeg " +
      string.lastIndexOf("ko osvaja")
    );
  }
}
console.log(funkcija("Ko osvaja  Ko osvaja Ko osvaja"));
