const myDetails =
    `{
    "name":"Yolanda",
    "age":25,
    "location":"Piet Retief",
    "established":"1982",
    "20":1000
}`

const user = JSON.parse(myDetails);
console.log(user);

const results = JSON.stringify(user);
console.log(results);
console.log(results.toUpperCase());