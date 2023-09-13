const obj = { size: "12", width: "220" };

function getProperty(obj, property) {
  //   return obj[property] ?? -1;
  return obj[property] == "undefined" ? obj[property] : -1;
  //   obj.hasOwnProperty();
}

console.log(getProperty("size"));
