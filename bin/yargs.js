#!/usr/bin/env node

const yargs = require('yargs/yargs')
const dedent = require('dedent')
const { hideBin } = require('yargs/helpers')

const arg = hideBin(process.argv)
const cli = yargs(arg)

cli
    .usage('Usage: starblink [command] <options>')
    .demandCommand(1, 'A command is required')
    .recommendCommands()
    .fail((err, msg) => {
        console.log(err, 'err')
        console.log(msg, 'msg')
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .wrap(cli.terminalWidth())
    .epilogue(dedent(
        `footer description':
        this is a simple description
    `
    ))
    .options({
        debug: {
            type: 'Boolean',
            describe: 'debug mode ',
            alias: 'd'
        }
    })
    .option('registry', {
        type: 'string',
        describe: '注册',
        // hidden: true
    })
    .group(['debug'], 'Dev Options:')
    .group(['registry'], 'Extra Options:')
    .command('init [name]', 'Init a project',
        (yargs) => {
            yargs.option('name', {
                type: 'string',
                describe: 'Name of a project'
            })

        }, (argv) => {
            console.log(argv)
        })
    .command({
        command: 'list',
        aliases: ['ls', 'la', 'll'],
        describe: 'list local packages ',
        builder: (yargs) => { },
        handler: (argv) => { }
    })
    .strict().argv 