export class Calculator {
  add(string) {
    let splitString = string.split(",")
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
}
