#!/usr/bin/env node
'use strict'
var meow = require('meow')
var ignoreGithubUsers = require('./')

var cli = meow([
  'Usage',
  '  $ ignore-github-users [input]',
  '',
  'Examples',
  '  $ ignore-github-users greenkeeperio-bot'
])

ignoreGithubUsers(cli.input[0])
