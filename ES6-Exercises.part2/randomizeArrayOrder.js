//Write a JavaScript program to randomize the order of array values, returning an updated array.
const shuffleArray= arr=>{
    for(let i= arr.length-1; i>0;i--){
        let randomIndex= Math.floor(Math.random()*(i+1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray(["apple", "banana", "mango"]));
