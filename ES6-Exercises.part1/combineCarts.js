const combineCarts= (cart1, cart2)=>{
    const newCart= [...cart1,...cart2];
    return newCart;
}
const cartA = ["apple", "banana"];
const cartB = ["orange", "grape"];
const combineCart= combineCarts(cartA,cartB);
console.log("combined Cart:", combineCart)
