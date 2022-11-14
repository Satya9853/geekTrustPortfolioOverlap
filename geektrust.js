const fs = require("fs");

//local imports
const populate = require("./dataManager/populate");

const filename = process.argv[2];

// fs.readFile(filename, "utf8", (err, data) => {
//   /*if (err) throw err
//     var inputLines = data.toString().split("\n")
//     // Add your code here to process input commands
//     */
// });

const main = async () => {
  populate();
};

main();
