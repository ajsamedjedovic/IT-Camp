//JavaScript GET metode za datume:

//sledece metode mozemo iskoristiti za dobijanje odrednjenih informacija vezano za neki datum:
const date = new Date();

//1. getFullYear()

console.log(date.getFullYear());

// 2. getMonth()

console.log(date.getMonth());

// 3. getDate

console.log(date.getDate());

//4. getHours()

console.log(date.getHours());

//5. getMinutes()

console.log(date.getMinutes());

//6. getSeconds()

console.log(date.getSeconds());

// 7. getMiliseconds()

console.log(date.getMilliseconds());

//8. getTime()

console.log(date.getTime()); //istu vrednost vraca.
console.log(Date.parse(date)); //istu vrednost vraca.

// 9. getDay

console.log(date.getDay()); //vraca vrednost 0-6(dani u nedelji).
// 0 - nedelja
// 6 - subota

//10. Date.now()
console.log(Date.now()); //broj milisekundi od nultog datuma do sada.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JavaScript SET  metode za datume:

//sledece metode mozemo iskoristiti za setovanje odrednjenih informacija vezano za neki datum:

//1. setFullYear()
const updatedDate = date.setFullYear(1999);
console.log(new Date(updatedDate));

//2. setMonth()
const updatedDate2 = date.setMonth(9);
console.log(new Date(updatedDate2));

// 3. setDate()

//4. setHours()

//5. setMinutes()

//6.setSeconds()

//7. setMiliseconds()
