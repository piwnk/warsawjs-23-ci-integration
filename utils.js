const xPathToCss = require('xpath-to-css');

function x(xPath) {
  return xPathToCss(xPath);
}

console.log(xPath`//*[contains(@id, 'custom-6')]`);

module.exports = {
  x
}