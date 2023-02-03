import * as fs from "node:fs";

fs.writeFile("example.txt", "Hello World! Sorry for being late.", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
    });
