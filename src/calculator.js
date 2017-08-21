export class Calculator {
  add(string) {
    let splitString = this.delimiters(string)
    let integers = this.stringConverter(splitString)
    return integers.reduce(( acc, cur ) => acc + cur, 0);
  }

  stringConverter(splitString) {
    let maybeNumbers = []
    splitString.forEach(char => {
      if ( !char ) {
        maybeNumbers.push(0);
      } else {
        maybeNumbers.push(parseInt(char));
      }
    })
    return maybeNumbers
  }

  delimiters(string) {
    return string.split(/[^a-zA-Z0-9-]+/)
  }
}
