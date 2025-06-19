
const removeDuplicate= arrProductsId =>{
    let uniqueIds= new Set(arrProductsId);
    let result= [...uniqueIds];
    return result;
}
console.log(removeDuplicate([101, 202, 101, 303, 202, 404]));