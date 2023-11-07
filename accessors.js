//accessors

const student = {
    //data property
    firstName: "Slindelo",
    surname: "Mathenjwa",

    //accessor property(getter)
    get getName() { return this.firstName; },

    get getDetails() {
        return [this.surname, this.firstName];
    },
    //mutator property(setter)
    set setName(newName) {
        this.firstName = newName;
    },
};

console.log(student.firstName);
console.log(student.getName);
console.log(student.getDetails);
//assign a new name to first name
student.setName = "Yolanda";
console.log(student.firstName);




//end of accessors
let glablVar = "global variable";

function fun() {

    let localVar = "local variable";

    console.log(localVar);
}