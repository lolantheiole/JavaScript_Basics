const Student = {
    name: "Yolanda",
    age: 25,
    location: "Piet Retief",
    established: "1982",
    20: 1000,
}

const fs = require("fs");

function writeData(obj) {
    fs.writeFile('./students.json', JSON.stringify(obj), err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('success')
        }
    })
}
function readData() {
    fs.readFile('./students.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log(err);
        }
        else {
            try {
                const data = JSON.parse(jsonString);
                console.log(data);
                console.log('success')
            } catch (err) {
                console.log('error parsing JSON', err);
            }
        }
    });

}

writeData(Student);
readData();