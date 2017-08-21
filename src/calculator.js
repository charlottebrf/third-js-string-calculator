export class Calculator {
  add(string) {
    let integers = this.delimiters(string)
    return integers.reduce(( acc, cur ) => acc + cur, 0);
  }

  delimiters(string) {
    let splitString = string.split("")
    let integers = []
    splitString = this.stringConverter(splitString)
    splitString.forEach(maybeNumber => {
      if ( Number.isInteger(maybeNumber) ) {
        integers.push(maybeNumber)
      }
    })
    return integers
  }

  stringConverter(splitString) {
    let convertedStrings = []
    splitString.forEach(char => {
      if ( !char ) {
        convertedStrings.push(0);
      } else {
        convertedStrings.push(parseInt(char))
      }
    })
    return convertedStrings
  }
}
