#!/usr/bin/env node
'use strict'
const meow = require('meow')
const ignoreGithubUsers = require('./index.js')
const Promise = require('bluebird')
const pify = require('pify')
const ghauth = pify(require('ghauth'))

const cli = meow(`
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
`, {
  flags: {
    'token': {
      'type': 'string',
      'alias': 't'
    },
    'enterprise': {
      'type': 'boolean',
      'alias': 'e'
    }
  }
})

const authOptions = {
  configName: (cli.flags.e) ? 'ignore-ghe-notifications' : 'ignore-gh-notifications',
  note: 'Ignore GitHub notifications from a specific user',
  userAgent: (cli.flags.e) ? 'ignore-ghe-notifications' : 'ignore-gh-notifications',
  scopes: ['repo', 'user', 'notifications'],
  authURL: (cli.flags.e) ? cli.flags.e + '/authorizations' : null,
  promptName: (cli.flags.e) ? 'GitHub Enterprise' : null
}

// TODO Add example output to example text

Promise.resolve().then(() => {
  if (!cli.flags.token && !process.env.GITHUB_TOKEN) {
    return Promise.resolve(ghauth(authOptions))
      .then((user) => user.token)
      .catch((err) => {
        if (err) {
          throw new Error('Unable to validate with ghauth')
        }
      })
  } else {
    return cli.flags.token || process.env.GITHUB_TOKEN
  }
}).then((token) => {
  cli.flags.token = token
  return ignoreGithubUsers(cli.input[0], cli.flags)
})
  .then((res) => {
    console.log((res && res.length !== 0) ? res : `No notifications from ${cli.input[0]}.`)
  })
