// Question: Use ES6 destructuring to extract `name`, `age`, and `city` from the user object.

const user = {
  name: "Alice",
  age: 25,
  location: {
    city: "New York",
    country: "USA"
  }
};
const {name,age,location:{city}}= user;
console.log(name,age,city);
