#!/usr/bin/env node
'use strict'
var meow = require('meow')
var ignoreGithubUsers = require('./')
var Promise = require('bluebird')

var cli = meow([
  'Usage',
  '  $ ignore-github-users [input]',
  '',
  'Examples',
  '  $ ignore-github-users greenkeeperio-bot'
])

Promise.try(() => {
  return ignoreGithubUsers(cli.input[0])
}).then((result) => {
  console.log('result', result)
  console.log((result.length === 0) ? result : `No notifications from ${cli.input[0]}`)
})
