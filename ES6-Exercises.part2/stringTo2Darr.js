const csvStringTo2D= csvString=>{
let rows= csvString.split('\n')
let array2D= rows.map(row=>row.split(","));
return array2D;
}
console.log(csvStringTo2D("apple,banana,cherry\ndog,cat,mouse\nred,blue,green"));
