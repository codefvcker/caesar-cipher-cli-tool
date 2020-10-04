const fs = require('fs')

const getReadableStream = input => {
  return input
    ? fs.createReadStream(input, 'utf8')
    : process.stdin.setEncoding('utf8')
}

module.exports = getReadableStream
