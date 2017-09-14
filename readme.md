# ignore-github-users [![Build Status](https://travis-ci.org/RichardLitt/ignore-github-users.svg?branch=master)](https://travis-ci.org/RichardLitt/ignore-github-users)

> Remove GitHub notifications from specific users


## Install

```
$ npm install --save ignore-github-users
```


## Usage

```js
const ignoreGithubUsers = require('ignore-github-users');

ignoreGithubUsers('greenkeeperio-bot');
//=> 'Ignored greenkeeperio-bot'
```


## API

### ignoreGithubUsers(input)

#### input

Type: `string`, `array`

The user or users to ignore.

## CLI

```
$ npm install --global ignore-github-users
```

```
$ ignore-github-users --help

  Usage
    ignore-github-users [input]

  Examples
    $ ignore-github-users greenkeeperio-bot
    Ignored greenkeeperio-bot
```

## Contribute

Please do!

## License

MIT © [Richard Littauer](http://burntfen.com)
