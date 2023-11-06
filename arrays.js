//Arrays

//simple array
let courses = ["React", "Angular 2", "Javascript", "html"]; //pre-defined array

//Declaring variable
let i;
let space = " ";
let len = courses.length;

//pushing an item to the array
courses.push("c++");
console.log("List of items:" + " " + courses);


//initializing and declaring arrays
let learners = new Array(3); //undefined array
learners[0] = "zinhle";
learners[1] = 2;
learners[2] = 3;
learners[3] = 4;

//normally it shouldn print an OUT OF BOUND error
console.log("Number of Leaners:" + learners)

//printing using a for loop 
for (i = 0; i < len; i++) {
    space += courses[i + '']
 }
 console.log(courses);
 console.log(space);