// 3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

function vratiBroj(broj) {
  if (!isNaN(broj) && broj >= 100 && broj <= 999) {
    const stotina = Math.floor(broj / 100);
    const jedinica = broj % 10;
    const noviBroj = Number(`${stotina}${jedinica}`);
    return noviBroj;
  } else {
    return "Argument nije trazeni broj iz opsega.";
  }
}
console.log(vratiBroj(123));
console.log(vratiBroj(976));

//koji je od dva broja blizi sa 100

function funkcija(br1, br2) {
  let brojac1 = 0;
  let brojac2 = 0;
  if (br1 < 100) {
    for (i = br1; i < 100; i++) {
      brojac1++;
    }
  } else {
    for (i = br1; i > 100; i--) {
      brojac1++;
    }
  }
  if (br2 < 100) {
    for (i = br2; i < 100; i++) {
      brojac2++;
    }
  } else {
    for (i = br2; i > 100; i--) {
      brojac2++;
    }
  }
  if (brojac1 < brojac2) {
    return "${broj1}is nearest to 100 than ${broj2}";
  } else if (brojac1 > brojac2) {
    return "${broj2}is nearest to 100 than ${broj1}";
  } else {
    return "they are equaly near";
  }
}
console.log(funkcija(98, 9));
console.log(funkcija(102, 9));
console.log(funkcija(100, 100));
