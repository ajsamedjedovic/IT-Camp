//Promise(obecanje) je JavaScript objekat koji predstavlja mesto za rezultate asinhrone funkcije
//sve dok traje izvrsavanje asinhrone operacije.

const obecanje = new Promise((resolve, reject) => {
  const responce = 200;
  if (responce === 200) {
    resolve();
  } else {
    reject();
  }
});

//then metoda predstavlja mesto za izvrsavanje funkcije u slucaju revolve()
obecanje
  .then(() => {
    console.log("Uspesno dobijeni podaci");
  })
  .catch(() => {
    console.log("neuspesno dobijeni podaci");
  })
  .finally(() => {
    console.log("Izvrsaa se u svakom slucaju");
  });

//catch metoda predstavlja mesto za izvrsavanje funkcije u slucaju reject()

//Promise uslov vecii od 17 ili ne

const promise = new Promise((resolve, reject) => {
  const person = {
    firstName: "Ajsa",
    lastName: "Medjedovic",
    age: "10",
  };
  if (person.age > 17) {
    resolve();
  } else {
    reject(person.age);
  }
});

promise
  .then(() => {
    console.log("Person is older than 18");
  })
  .catch((years) => {
    console.log(years);
  });

const chain = new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 - 2, -4, -6, -8];
  if (arr.every((num) => typeof num === "number")) {
    resolve(arr);
  } else {
    const message = "Dobijeni niz ima vrednosti koje nisu brojevi.";
    reject(message);
  }
});

chain
  .then((dobijeniNiz) => {
    console.log(`Dobijeni niz je  ${dobijeniNiz}`);
    return dobijeniNiz;
  })
  .then((niz) => {
    const parni = niz.filter((num) => num % 2 === 0);
    console.log(`Niz parnih brojeva je ${parni}`);
  })
  .catch((poruka) => {
    console.log(poruka);
  });
