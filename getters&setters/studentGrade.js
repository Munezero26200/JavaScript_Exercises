
//You are building a system that stores a student's numeric grade (e.g., 85)
// but only wants to show the letter grade (e.g., “B”) when accessed.
const student={
    _score:90,//(_)is not required by JavaScript, but it's used as a naming convention to show "hey, this is a property is internal. don't touch it directly from outside"
            // this kind of variable is called a "backing property". it's used behind the scenes by the get and set methods.
    get grade(){
        if(this._score>=90 && this._score<=100) return "A";
        else if (this._score>=80) return "B";
        else  if(this._score>=70) return "C";
        else if(this._score>=60) return "D";
        else return "F";
    },
    set grade(marks){
        if(marks>=0 && marks<=100){
            this._score=marks;
        }else{
           console.log("Invalid score!");
        }
    }
}
console.log(student.grade);
student.grade=-40;
console.log(student.grade);
