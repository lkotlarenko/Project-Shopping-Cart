const { readFile, writeFile } = require('fs').promises;

const newKeys = ['total', 'fetchItem', 'fetchProducts', 'getSavedCartItems', 'saveCartItems'];

const serializeCoverage = (data) => Object.keys(data).reduce((acc, key, index) => {
  acc[newKeys[index]] = data[key];
  return acc;
}, {});

module.exports.testCoverage = async () => {
  const dataSerialized = await readFile('coverage/coverage-summary.json', 'utf-8')
    .then((result) => JSON.parse(result))
    .then((data) => serializeCoverage(data))
    .catch((error) => error);
  return writeFile('coverage/coverage-summary.json', JSON.stringify(dataSerialized));
};
