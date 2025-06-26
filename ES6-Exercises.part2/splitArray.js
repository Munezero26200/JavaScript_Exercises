//Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
const splitArray= (collection, filter)=>{
    let group1=[];
    let group2=[];
    for(let i=0; i<collection.length; i++){
        let char= collection[i];
        let condition= filter[i];
        if(condition===true){
            group1.push(char);
        }else{
            group2.push(char);
        }
    }
    return [group1, group2];
}
console.log(splitArray(
  ['a', 'b', 'c', 'd'],
  [true, false, true, false]
));


