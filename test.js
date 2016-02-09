/*!
 * try-require-please <https://github.com/tunnckoCore/try-require-please>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var tryRequirePlease = require('./index')

test('should throw if module not found', function (done) {
  function fixture () {
    tryRequirePlease('foo-bar')
  }

  test.throws(fixture, Error)
  test.throws(fixture, /Cannot find module/)
  done()
})

test('should throw if not found and adds default `._message` property on `err`', function (done) {
  try {
    tryRequirePlease('baz-qux')
  } catch (err) {
    test.strictEqual(err._wantedBy, undefined)
    test.strictEqual(err._moduleName, 'baz-qux')
    test.strictEqual(/Please install `baz-qux`/.test(err._message), true)
    test.strictEqual(/because some package needs it/.test(err._message), true)
    done()
  }
})

test('should throw and allow custom message to show on error', function (done) {
  try {
    tryRequirePlease('my-module', 'awesome-pkg')
  } catch (err) {
    test.strictEqual(err._moduleName, 'my-module')
    test.strictEqual(err._wantedBy, 'awesome-pkg')
    test.strictEqual(/because `awesome-pkg` needs it/.test(err._message), true)
    done()
  }
})

test('should get module if exist and not throws', function (done) {
  var util = tryRequirePlease('util')

  test.strictEqual(typeof util.format, 'function')
  test.strictEqual(util.format('foo %s bar', 'qux'), 'foo qux bar')
  done()
})
