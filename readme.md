# ignore-github-users [![Build Status](https://travis-ci.org/RichardLitt/ignore-github-users.svg?branch=master)](https://travis-ci.org/RichardLitt/ignore-github-users)

> Remove GitHub notifications from specific users


## Install

```
$ npm install --save ignore-github-users
```

### API Limits and setting up a GitHub Token

You also need to get a GitHub application token, if you are going to be hitting the API much. Go here: https://github.com/settings/tokens. Click on "Generate New Token". It doesn't need to have any special scopes. Name the token something informative: `name-your-contributors` is a good name.

Set the token with the variable name `$GITHUB_OGN_TOKEN` somewhere in your `.bash_profile` or `.bashrc` files. These are normally hidden in your root directory. Alternatively, you can provide it in the CLI each time you run the command by calling `GITHUB_OGN_TOKEN=<token> name-your-contributors`.

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


## License

MIT © [Richard Littauer](http://burntfen.com)
