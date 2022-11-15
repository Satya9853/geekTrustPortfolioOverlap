require("dotenv").config();
const axios = require("axios");
const saveLocale = require("./saveLocale");

// this function is made to do a fresh api call so that we get fresh and updated data everytime.
// here in this project it is not necessary but it's a good practice to always have updated data
const populate = async () => {
  try {
    const response = await axios.get(process.env.API_URL);
    saveLocale(response.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = populate;
