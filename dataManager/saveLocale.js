const fs = require("fs");

const saveLocale = (receivedData) => {
  //saving data to local file named data.json
  fs.writeFile("data.json", JSON.stringify(receivedData), (error) => {
    if (error) console.log(error);
    else console.log("Data Sucessfully updated");
  });
};

module.exports = saveLocale;
