const courses = ["IT", "HR", "Computer Science", "Marketing"];

let i = 0;

let len = courses.length;

let devops = " ";

for (; i < len;) {
    devops += courses[i + ''] + '\n'
    i++;

}
console.log(devops);