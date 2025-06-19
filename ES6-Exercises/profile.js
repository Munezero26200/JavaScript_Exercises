
const extraProfile = user =>{
    const{name,city}= user;
    return {name,city};
}
const user={
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Engineer"
}
console.log(extraProfile(user));
