/*!
 * try-require-please <https://github.com/tunnckoCore/try-require-please>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var format = require('util').format
var define = require('define-property')

/**
 * > Try to require module.
 *
 * **Example**
 *
 * ```js
 * const simpleGet = tryRequire('simple-get', 'request-all')
 * // => simpleGet module or the thrown error
 * ```
 *
 * @param  {String} `<name>` module name to try to require
 * @param  {String} `[wantedBy]` optionally give name of module that requires it
 * @api public
 */
module.exports = function tryRequirePlease (name, wantedBy) {
  var ret = null
  try {
    ret = require(name)
  } catch (err) {
    throw warnError(name, wantedBy, err)
  }
  return ret
}

function warnError (name, wantedBy, err) {
  var message = formatMessage(name, wantedBy)
  define(err, '_moduleName', name)
  define(err, '_wantedBy', wantedBy)
  define(err, '_message', message)
  console.warn(message)
  return err
}

function formatMessage (name, wantedBy) {
  var one = 'Please install `%s`, because '
  one += (typeof wantedBy !== 'undefined' ? '`%s`' : 'some package') + ' needs it.\n'
  var two = 'Maybe `%s` is devDependency, because adds optional functionality?'

  one = format(one, name, wantedBy || '')
  two = format(two, name)
  return one + two
}
