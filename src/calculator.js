export class Calculator {
  add(string) {
    return this.stringChecker(string)
  }

  stringChecker(string) {
    if ( !string ) {
      return 0;
    } else {
      return parseInt(string, 10)
    }
  }
}
