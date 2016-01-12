#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ignoreGithubUsers = require('./');

var cli = meow([
	'Usage',
	'  $ ignore-github-users [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ ignore-github-users',
	'  unicorns & rainbows',
	'  $ ignore-github-users ponies',
	'  ponies & rainbows'
]);

console.log(ignoreGithubUsers(cli.input[0] || 'unicorns'));
