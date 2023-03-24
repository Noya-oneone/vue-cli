#!/usr/bin/env node

const commander = require('commander')
const pkg = require('../package.json')

const program = commander.program

program
.version(pkg.version)
.parse(process.argv)