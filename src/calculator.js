export class Calculator {
  add(string) {
    return this.stringChecker(string)
  }

  stringChecker(string) {
    if ( string == "" ) {
      return 0;
    }
  }
}
