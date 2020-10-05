const { Transform } = require('stream')
const { cipherHandler } = require('./handlers')

const getTransformStream = (action, shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(cipherHandler(chunk, action, shift))
      callback()
    },
  })
}

module.exports = getTransformStream
