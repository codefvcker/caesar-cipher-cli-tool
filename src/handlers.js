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

const modeHandler = (charCode, shiftResult, action) => {
  let resultSum
  let sumDiff
  if (charCode >= 65 && charCode <= 90) {
    if (action === 'encode') {
      resultSum = charCode + shiftResult
      sumDiff = resultSum - 91
      return resultSum > 90 ? 65 + sumDiff : resultSum
    } else {
      resultSum = charCode - shiftResult
      sumDiff = 64 - resultSum
      return resultSum < 65 ? 90 - sumDiff : resultSum
    }
  }
  if (charCode >= 97 && charCode <= 122) {
    if (action === 'encode') {
      resultSum = charCode + shiftResult
      sumDiff = resultSum - 123
      return resultSum > 122 ? 97 + sumDiff : resultSum
    } else {
      resultSum = charCode - shiftResult
      sumDiff = 96 - resultSum
      return resultSum < 97 ? 122 - sumDiff : resultSum
    }
  }
  return charCode
}

const cipherHandler = (text, action, shiftNum) => {
  return text
    .toString()
    .replace(/(\r\n|\n|\r)/gm, '')
    .split('')
    .map(item => {
      let shiftResult = shiftNum % 26
      return String.fromCharCode(
        modeHandler(item.charCodeAt(), shiftResult, action)
      )
    })
    .join('')
}

module.exports = {
  errorHandler,
  cipherHandler,
  optionsValidateHandler,
}
