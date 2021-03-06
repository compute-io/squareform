squareform
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

>  Turns a distance vector into a distance matrix, and vice-versa.


## Installation

``` bash
$ npm install compute-squareform
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var squareform = require( 'compute-squareform' );
```

#### squareform( x )

This method creates the full m x m distance matrix which holds the pairwise distances and zeros on the main diagonal.


## Examples

``` javascript
var foo = require( 'compute-squareform' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-squareform.svg
[npm-url]: https://npmjs.org/package/compute-squareform

[travis-image]: http://img.shields.io/travis/compute-io/squareform/master.svg
[travis-url]: https://travis-ci.org/compute-io/squareform

[coveralls-image]: https://img.shields.io/coveralls/compute-io/squareform/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/squareform?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/squareform.svg
[dependencies-url]: https://david-dm.org/compute-io/squareform

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/squareform.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/squareform

[github-issues-image]: http://img.shields.io/github/issues/compute-io/squareform.svg
[github-issues-url]: https://github.com/compute-io/squareform/issues
