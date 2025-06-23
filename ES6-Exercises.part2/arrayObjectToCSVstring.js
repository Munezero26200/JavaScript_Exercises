const objectsTocsv= (data,columns)=>{
    const header= columns.join(",");
    //each row of data
    const rows= data.map(obj=>{
        return columns.map(cols=>obj[cols]);
    })//so each row is now CSV row
  const csv= [header,...rows].join("\n");
  return csv;
}
const data = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "Chicago" }
];
const columns = ["name", "city"];
console.log(objectsTocsv(data, columns));
