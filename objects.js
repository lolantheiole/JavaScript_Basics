

let school = {
    name: "Vukubone Secondary School",
    location: "Piet Retief",
    established: "1982",
    20: 1000,
    
    displayInfo: function (){
        console.log(`Welcome to ${school.name} located in ${school.location} which was established at ${school.established} having rating of ${school[20]}`);

        //for numbers we use square brackets
    }
}

school.displayInfo();