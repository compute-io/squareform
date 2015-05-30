/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	squareform = require( './../lib' ),

	euclidean = require( 'compute-euclidean-distance' ),
	pdist = require( 'compute-pdist' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-squareform', function tests() {

	it( 'should export a function', function test() {
		expect( squareform ).to.be.a( 'function' );
	});

	it( 'can turn array into matrix of pairwise distances', function test() {
		var i, j, d, X;

		X = [
			[ 2, 4, 3, 1],
			[ 1, 2, 2, 1],
			[ 7, 3, 9, 7],
			[ 11, 9, 9, 8],
			[ 3, 2, 3, 1]
		];

		// default: euclidean distance
		d = pdist( X, {} );
		var dMat = squareform( d );
		for ( i = 0; i < X.length; i++ ) {
			for ( j = 0; j < X.length; j++ ) {
				if ( i !== j ) {
					expect( dMat.get( i, j ) === euclidean(X[i], X[j]) ).to.be.true;
				} else {
					expect( dMat.get( i, j ) === 0 ).to.be.true;
				}

			}
		}

	});

	it( 'can turn distance matrix into array holding pairwise distances', function test() {
		var i, d, d2, dMat, X;

		X = [
			[ 2, 4, 3, 1],
			[ 1, 2, 2, 1],
			[ 7, 3, 9, 7],
			[ 11, 9, 9, 8],
			[ 3, 2, 3, 1]
		];

		// default: euclidean distance
		d = pdist( X, {} );
		dMat = squareform( d );
		d2 = squareform( dMat );
		for ( i = 0; i < d.length; i++ ) {
			expect( d[i] === d2[i] ).to.be.true;
		}
	});

});
