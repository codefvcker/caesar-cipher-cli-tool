const { pipeline } = require('stream')

const { errorHandler } = require('./src/handlers')

const getReadableStream = require('./src/readableStream')
const getTransformStream = require('./src/transformStream')
const getWritableStream = require('./src/writableStream')

const options = require('./src/options')

const buildPipeline = options => {
  pipeline(
    getReadableStream(options.input),
    getTransformStream(options.action, options.shift),
    getWritableStream(options.output),
    errorHandler
  )
}

buildPipeline(options)
