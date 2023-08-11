const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookProfile = (arr, name, prop) => {
  const contact = arr.find((contact) => contact.firstName == name);
  if (contact) {
    if (contact.hasOwnProperty(prop)) {
      return contact[prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
};
console.log(lookProfile(contacts, "Sherlock", "number"));
console.log(lookProfile(contacts, "Sherlock", "hobby"));
console.log(lookProfile(contacts, "Michael", "number"));

// {
//     id: 1,
//     name: "ARSENAL 22/23 HOME JERSEY",
//     price: 50,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/ARSENAL_22-23_HOME_JERSEY_Y_Red_HA5339_01_laydown.jpg",
//     currency: "EUR",
//     quantity: 41,
//   },

const discountProduct = (arr) => {
  arr.map((product) => {
    if (product.quantity > 40) {
      return {
        ...product,
        price: product.price * 0.6,
      };
    } else if (product.quantity > 20) {
      return {
        ...product,
        price: product.price * 0.8,
      };
    } else {
      return product;
    }
  });
};
