const { Command } = require('commander')
const program = new Command()

const { optionsValidateHandler } = require('./handlers')

program.storeOptionsAsProperties(true)

program
  .option('-s,--shift <type>', 'Shift')
  .option('-i,--input <type>', 'Input file')
  .option('-o,--output <type>', 'Output file')
  .option('-a,--action <type>', 'Act')
  .parse()

const options = optionsValidateHandler(program.opts())

module.exports = options
