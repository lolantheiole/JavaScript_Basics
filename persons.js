function Person(name, age){
    this.name = name;
    this.age = age;
}

//Creating objects

let john = new Person("John",22);
let jane = new Person("Jane",19);

console.log(john);
console.log(jane);

let Bongie = {
    name: "Bongie",
    age: 22,

};

function Students(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

let slindelo = new Students(Bongie, Bongie.age, "Math");
console.log(slindelo);