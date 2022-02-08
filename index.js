const fs = require("fs");
const swc = require("@swc/core");

module.exports = (filename) => {
  const inputCode = fs.readFileSync(filename, "utf-8");

  const swcResult = swc.transformSync(inputCode, {
    module: {
      type: "commonjs",
    },
  });

  return swcResult.code;
};
