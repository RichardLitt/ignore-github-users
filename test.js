const test = require('ava').test
const lib = require('./lib/helpers.js')

// TODO Extract this into its own module
test('stringOrArrayToArray will take string', t => {
  const res = lib.stringOrArrayToArray('hello')
  // Object.is(arr, arr) doesn't work. JavaScript ¯\_(ツ)_/¯
  t.is(['hello'][0], res[0], 'Return an array')
})

test('stringOrArrayToArray will take an array', t => {
  const res = lib.stringOrArrayToArray(['hello'])
  // Object.is(arr, arr) doesn't work. JavaScript ¯\_(ツ)_/¯
  t.is(['hello'][0], res[0], 'Return an array')
})

test('stringOrArrayToArray will throw for an Object', t => {
  const error = t.throws(() => {
    lib.stringOrArrayToArray({'hello': 'hello'})
  }, TypeError);

  t.is(error.message, 'Expected a string or an array');
})

// TODO Add tests for main function
