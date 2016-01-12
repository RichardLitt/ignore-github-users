# ignore-github-users [![Build Status](https://travis-ci.org/RichardLitt/ignore-github-users.svg?branch=master)](https://travis-ci.org/RichardLitt/ignore-github-users)

> My super-duper module


## Install

```
$ npm install --save ignore-github-users
```


## Usage

```js
const ignoreGithubUsers = require('ignore-github-users');

ignoreGithubUsers('unicorns');
//=> 'unicorns & rainbows'
```


## API

### ignoreGithubUsers(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global ignore-github-users
```

```
$ ignore-github-users --help

  Usage
    ignore-github-users [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ ignore-github-users
    unicorns & rainbows
    $ ignore-github-users ponies
    ponies & rainbows
```


## License

MIT © [Richard Littauer](http://burntfen.com)
