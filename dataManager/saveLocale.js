const fs = require("fs");

const saveLocale = async (receivedData) => {
  try {
    //saving data to local file named data.json
    fs.writeFile("data.json", JSON.stringify(receivedData), (error) => {
      if (error) console.log(error);
    });
    console.log("saved");
  } catch (error) {
    console.log(error);
  }
};

module.exports = saveLocale;
