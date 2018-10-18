const path = require ('path');
const fs = require ('fs');
const rp = require ('request-promise');

let chirps = [
    {
        name: "George",
        chirp:"Monkey",
    },
    {
        name: "Alvin",
        chirp: "Chipmonk",
    },
    {
        name: "Tom",
        chirp: "Cat",
    },
    {
        name: "Wily",
        chirp: "Coyte",
    },
    {
        name: "Bugs",
        chirp: "Bunny",
    }
]

let chirpsJSON = JSON.stringify(chirps);

fs.writeFile('chirps.json', chirpsJSON, (err) => {
    if (err) throw err;

    console.log('The file has been saved');

});


fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;

    console.log(JSON.parse(data));
});



