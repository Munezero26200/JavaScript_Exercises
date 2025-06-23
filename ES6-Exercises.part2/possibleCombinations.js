const possibleSubset= arrNum=>{
  let result=[];
  const helper= (index, currCombination)=>{
        result.push([...currCombination]);
    for(let i=index; i<arrNum.length; i++){
        currCombination.push(arrNum[i]);
        helper(i+1, currCombination);
        currCombination.pop();
    }
  }
  helper(0,[]);
  return result;
}
console.log(possibleSubset([1, 2,3,4]));
