const fs = require("fs");

module.exports.saveFile = (data, fileName) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};



module.exports.readFile = (fileName) => {
  try {
    fs.readFileSync(fileName, "utf-8");
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
