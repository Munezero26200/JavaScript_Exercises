
const oddSquares= arr=>{
    let filted= arr.filter(val=>{
        if(val%2!==0)return val
    })
    let result=filted.map(val=>val*val);
    return result;
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));
console.log(oddSquares([10, 15, 20, 25, 30]));