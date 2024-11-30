const peliculas = require("./peliculas.js");
const fs = require("fs");
const path = require("path")

const msg = fs.readFileSync(path.join(__dirname, 'mensaje.txt'), 'utf8')

for (const element of peliculas) {
    console.log(element);
}

console.log(msg);
