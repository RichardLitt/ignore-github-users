const test = require('ava').test
const fn = require('./')
const lib = require('./lib/index.js')
const Octokat = require('octokat')

var octo = new Octokat({
  token: process.env.GITHUB_TOKEN
  // rootURL: opts.enterprise
})

test('Needs authentication', async t => {
	const error = await t.throws(lib.getNotification(new Octokat(), 'https://api.github.com/notifications/threads/1'));
	t.regex(error.message, /Requires authentication/);
})

// TODO Add tests for main function
