#!/usr/bin/env node
'use strict'
var meow = require('meow')
var ignoreGithubUsers = require('./')
var Promise = require('bluebird')
const ghauth = Promise.promisify(require('ghauth'))
const authOptions = {
  configName: 'ignoreGithubUsers',
  note: 'Ignore GitHub notifications for a specific user',
  userAgent: 'ignoreGithubUsers',
  scopes: ['notifications']
}

var cli = meow([
  'Usage',
  '  $ ignore-github-users [input]',
  '',
  'Examples',
  '  $ ignore-github-users greenkeeperio-bot'
])

Promise.try(() => {
  return ghauth(authOptions)
}).then((authData) => {
  return ignoreGithubUsers(cli.input[0], cli.flags, authData.token)
}).then((result) => {
  console.log((result.length === 0) ? result : `No notifications from ${cli.input[0]}`)
})
