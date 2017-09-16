# ignore-github-users

[![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/ignore-github-users.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/ignore-github-users.png)](https://nodei.co/npm/ignore-github-users/)

[![Build Status](https://travis-ci.org/RichardLitt/ignore-github-users.svg?branch=master)](https://travis-ci.org/RichardLitt/ignore-github-users)

> Remove GitHub notifications from specific users


## Install

```
$ npm install --save ignore-github-users
```

## Usage

```js
const ignoreGithubUsers = require('ignore-github-users');

ignoreGithubUsers('greenkeeper[bot]');
//=> 'Ignored greenkeeperio-bot'
```


## API

### ignoreGithubUsers(input)

#### input

Type: `string`, `array`

The user or users to ignore.

#### token

Type: `token`

Your GitHub personal access token. Can be set as `$GITHUB_TOKEN` in your env.

#### enterprise

Type: `string`

The URL for your GitHub enterprise endpoint.

## CLI

```
$ npm install --global ignore-github-users
```

```
$ ignore-github-users --help

  Usage
    $ ignore-github-users <input> [opts]

  Options
    -t, --token A token
    -e, --enterprise A different GitHub endpoint

  Examples
    $ ignore-github-users greenkeeper[bot]
    Ignored 3 issues with greenkeeper[bot].
    $ ignore-github-users greenkeeper[bot]
    No notifications from greenkeeper[bot].
```

## Contribute

Please do!

## License

MIT © [Richard Littauer](http://burntfen.com)
