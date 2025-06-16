//You have a User object. You want to get the full name of the user, 
// and allow people to set it—but only using the format "First Last".
const user={
    firstName: "John",
    secondName: "Doe",

    get fullName(){
    return `${this.firstName} ${this.secondName}`;
      },
    
      set fullName(name){
        let arrName= name.split(" ");
        if(arrName.length===2){
           this.firstName=arrName[0];
        this.secondName=arrName[1];
        //the reason why there's no return in setter is becuase is used to update/set 
        // a value inside object not to return a value to the outside.
        }else{
            return "Invalid format of Name."
        }
        

      }
}
  console.log(user.fullName);//getter
  user.fullName="Aline MUNEZERO";//setter
  console.log(user.fullName);//to see if setter worked
