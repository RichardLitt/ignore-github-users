const isArray = require('isarray')

function stringOrArrayToArray (input) {
  if (typeof input !== 'string') {
    if (!isArray(input)) {
      throw new TypeError('Expected a string or an array')
    }
    return input
  } else {
    return [input]
  }
}

module.exports = {
  stringOrArrayToArray
}