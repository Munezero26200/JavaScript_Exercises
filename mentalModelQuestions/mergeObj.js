
const original = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const newObj={...original,...extra};
console.log(newObj);