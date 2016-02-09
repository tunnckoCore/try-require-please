# [try-require-please][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Try to require the given module, failing loudly with default message if module does not exists.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i try-require-please --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const tryRequirePlease = require('try-require-please')
```

### [tryRequirePlease](index.js#L27)
> Try to require module.

**Params**

* `<name>` **{String}**: module name to try to require    
* `[wantedBy]` **{String}**: optionally give name of module that requires it    

**Example**

```js
const simpleGet = tryRequire('simple-get', 'request-all')
// => simpleGet module or the thrown error
```

or you will see something like that

```
Please install `simple-get`, because `request-all` needs it.
Maybe `simple-get` is devDependency, because adds optional functionality?
/home/charlike/dev/ready/try-require-please/index.js:32
    throw warnError(name, wantedBy, err)
    ^

Error: Cannot find module 'simple-get'
    at Function.Module._resolveFilename (module.js:339:15)
    at Function.Module._load (module.js:290:25)
    at Module.require (module.js:367:17)
    at require (internal/module.js:16:19)
    at tryRequirePlease (/home/charlike/dev/ready/try-require-please/index.js:30:11)
    at Object.<anonymous> (/home/charlike/dev/ready/try-require-please/test.js:56:1)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/try-require-please/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/try-require-please
[npmjs-img]: https://img.shields.io/npm/v/try-require-please.svg?label=try-require-please

[license-url]: https://github.com/tunnckoCore/try-require-please/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/try-require-please
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/try-require-please.svg

[travis-url]: https://travis-ci.org/tunnckoCore/try-require-please
[travis-img]: https://img.shields.io/travis/tunnckoCore/try-require-please.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/try-require-please
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/try-require-please.svg

[david-url]: https://david-dm.org/tunnckoCore/try-require-please
[david-img]: https://img.shields.io/david/tunnckoCore/try-require-please.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg