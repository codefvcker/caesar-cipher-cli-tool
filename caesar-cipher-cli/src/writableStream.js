const fs = require('fs')
const { Writable } = require('stream')

class WritableStreamClass extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
}

const getWritableStream = input => {
  return input
    ? fs.createWriteStream(input, { flags: 'a' })
    : new WritableStreamClass()
}

module.exports = getWritableStream
