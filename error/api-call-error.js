const customError = require("./custom-error");

class apiCallError extends customError {
  constructor(message) {
    super(message);
  }
}
