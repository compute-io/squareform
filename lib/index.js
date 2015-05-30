'use strict';

// MODULES //

var matrix = require( 'compute-matrix' );
// var isMatrix = require( 'validate.io-matrix' );

// SQUAREFORM //

/**
* FUNCTION: squareform()
*	Turns a distance vector into a distance matrix, and vice-versa.
*
*	@param{Matrix|Array}  n x n distance matrix or array holding pairwise distances
*	@returns{Matrix|Array} n x n distance matrix or array holding pairwise distances
*/
function squareform( x ) {

	var i, j, n, ret;

	if ( x.hasOwnProperty('n') && x.hasOwnProperty('get') ) {
		// Case 1: x is result from pdist call
		n = x.n;
		ret = matrix( [n, n] );
		for ( i = 0; i < n; i++ ) {
			for ( j = 0; j < n; j++ ) {
				if ( i !== j) {
					ret.set( i, j , i < j ? x.get( i, j ) : x.get( j, i ) );
				} else {
					ret.set( i, j, 0 );
				}
			}
		}
	} else {

		// Case 2: is x a distance matrix?
		/*
		if ( !isMatrix(x) ) {

		}
		*/
		n = x.shape[0];
		ret = [];
		for ( i = 0; i < n; i++ ) {
			for ( j = i + 1; j < n; j++ ) {
				ret.push( x.get( i, j ) );
			}
		}
		/**
		* 	METHOD: get( i, j )
		* 		retrieves the pairwise distance of element i and j, where i < j
		* @param {Number} i - index of first element
		* @param {Number} j - index of second element
		* @returns {Number} distance between i and j
		*/
		Object.defineProperty( ret, 'get', {
			enumerable: false,
			configurable: false,
			writeable: false,
			value: function( i, j ) {
				var index = (i === 0) ? j - 1 : i * (n - 1) - (i * ( i - 1 ) / 2) + j - i - 1;
				return this[ index ];
			}
		});
		Object.defineProperty( ret, 'n', {
			enumerable: false,
			configurable: false,
			writeable: false,
			value: n
		});
	}

	return ret;

} // end FUNCTION squareform()


// EXPORTS //

module.exports = squareform;
