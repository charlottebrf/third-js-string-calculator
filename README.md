String Calculator
======================
This repository contains a running application that offers a third ES6 JS solution to the string calculator problem. Please see the [Requirements file](REQUIREMENTS.md) for full details of this problem. This is the second attempt at the problem, for the first attempt see: string-calculator


## Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Running tests](#running-tests)
- [Test suite](#test-suite)
- [My approach](#my-approach)
- [Future Improvements](#future-improvements)


## Getting Started

```
npm install
```

## Running Tests

```
npm test
```

## Test suite

```
Mocha
Chai
```

## My Approach
This version of the String Calculator focused on learning the ES6, both its syntax in the tests & source code, & setting up an ES6 project with all the necessary dependencies. Instead of using lo-dash as an external dependency I sought out more modern JS enumeration functions.

Again the approach taken was a TDD, red, green, refactor cycle.

## Future Improvements
I would like to improve the converter & checkForNegatives functions. Pushing return values into an array feels like a code smell. In the future I'd like to get better at using map to avoid manually creating arrays to be returned at the end of functions. Another improvement would be to reduce the number of conditional if statements.

In the future I'd like to move towards using Yarn. As a beginner many ES6 tutorials used NPM which is why I played it safe & used NPM in this repository. However, the repository could be improved by not including the node_modules. I'd also like to experiment using Jest for my testing framework as a number of developers have recommended it.
