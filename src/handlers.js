const fs = require('fs')

const errorHandler = err => {
  if (!err) {
    return
  }
  process.stderr.write(err)
}

const optionsValidateHandler = options => {
  const { input, action, shift, output } = options

  if (action !== 'encode' && action !== 'decode') {
    process.stderr.write('error: type correct action')
    process.exit(1)
  }

  if (input) {
    try {
      fs.accessSync(input, fs.constants.F_OK | fs.constants.R_OK)
    } catch (err) {
      process.stderr.write("error: no input file or it doesn't readable")
      process.exit(1)
    }
  }

  if (output) {
    try {
      fs.accessSync(output, fs.constants.F_OK | fs.constants.W_OK)
    } catch (err) {
      process.stderr.write("error: no output file or it doesn't readable")
      process.exit(1)
    }
  }

  if (shift < 0) {
    process.stderr.write('error: shift should more than 0')
    process.exit(1)
  }

  return options
}

const cipherHandler = (text, action, shiftNum) => {
  return text
    .toString()
    .replace(/(\r\n|\n|\r)/gm, '')
    .split('')
    .map(item => {
      if (
        (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) ||
        (item.charCodeAt() >= 97 && item.charCodeAt() <= 122)
      ) {
        return String.fromCharCode(
          action === 'encode'
            ? item.charCodeAt() + (shiftNum % 27)
            : item.charCodeAt() - (shiftNum % 27)
        )
      }
      return item
    })
    .join('')
}

module.exports = {
  errorHandler,
  cipherHandler,
  optionsValidateHandler,
}
