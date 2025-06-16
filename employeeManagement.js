
const createEmployee= (name,age,position,department,city,country)=>{
    return {
        name,
        age,
        position,
        department,
        location:{
            city,
            country
        }
    }
}
const promoteEmployee= (emp,position)=>{
    return{
        ...emp,
        position
    };
}
const getSummary=(emp)=>{
    const{name, position, department,age,location:{city,country}}=createEmployee;
}