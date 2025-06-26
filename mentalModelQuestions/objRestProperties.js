// Question: Use destructuring with rest syntax to extract `id` and collect the rest into another object.

const product = { id: 101, name: "Laptop", price: 1200 };
const {id,...otherDetails}=product;
console.log(id);
console.log(otherDetails);