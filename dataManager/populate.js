require("dotenv").config();
const axios = require("axios");
const saveLocale = require("./saveLocale");

const populate = async () => {
  try {
    const response = await axios.get(process.env.API_URL);
    saveLocale(response.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = populate;
