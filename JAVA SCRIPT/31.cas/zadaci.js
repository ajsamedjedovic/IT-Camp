function funkcija(month, godina) {
  if (month === 1) {
    return "Ima 29 dana";
  } else if (month % 2 !== 0) {
    return "ima 30 dana";
  } else {
    return "ima 31 dan";
  }
}
console.log(funkcija(4, 2000));

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 0, 22, 22, 22).getDate();
  return date;
};
console.log(getDaysInMonth(1, 2012));

function getMonth(string) {
  const meseci = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ];
  const date = new Date(string);
  const month = date.getMonth();
  return meseci[month];
}
console.log(getMonth("2023-01-22"));
