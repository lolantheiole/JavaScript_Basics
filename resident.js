const {Citizen} = require ('./citizen.js');   ///resident at the top

let res = new Citizen("Lola",24);

res.addAddress("Kigali");
res.getDetails();

//console.log(res.getDetails());
