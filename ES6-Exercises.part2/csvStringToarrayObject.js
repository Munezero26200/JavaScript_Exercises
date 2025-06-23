// convert CSV string to a 2D array of objects. the first row of the string is used as the title row.
const csvTo2Darray= csvString=>{
    let rows= csvString.split("\n");
    let header= rows[0].split(',');
    let result=[];
    for(let i=1;i< rows.length; i++){
        let values= rows[i].split(",");
        let obj={};
        for(let j=0;j<header.length;j++){
            obj[header[j]]=values[j];
        }
        result.push(obj);
    }
return result;

}
const csv = `name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago`;

console.log(csvTo2Darray(csv));

