const path = require("path");
const solc = require("solc");
// const source = path.resolve(__dirname, "contracts", "Campaign.sol");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campgnPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campgnPath, "utf8");
// const setPath = fs.readFileSync(path.resolve(__dirname, "contracts", "setVal.sol"), "utf8");
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
