const fs = require("fs");
const path = require("path");

function getReadmeContent() {
  const filePath = path.join(__dirname, "README.md");
  return fs.readFileSync(filePath, "utf8");
}

module.exports = { getReadmeContent };
