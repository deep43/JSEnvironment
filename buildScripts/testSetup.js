/**
 * Created by dhazra on 11/26/2017.
 */

// This file isn't transpiled, so must use CommonJS and ES5.

// Register babel to transpile before our test runs
require('babel-register')();

// Disable webpack features that mocha doesn't understands
require.extensions['.css'] = function () {};



