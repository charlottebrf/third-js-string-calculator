export class Calculator {
  add(string) {
    let integers = this.delimiters(string)
    return integers.reduce(( acc, cur ) => acc + cur, 0);
  }

  delimiters(string) {
    let splitString = string.split("")
    splitString = this.converter(splitString)
    return splitString.filter((maybeNumber) => Number.isInteger(maybeNumber))
  }

  converter(splitString) {
    let maybeIntegers = []
    splitString.forEach(char => {
      if ( !char ) {
        maybeIntegers.push(0);
      } else {
        maybeIntegers.push(parseInt(char))
      }
    })
    return maybeIntegers
  }
}
