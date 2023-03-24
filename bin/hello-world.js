#!/usr/bin/env node

// 注册一个命令 starblink init 
const lib = require('../lib/index.js')
console.log(lib, 'lib')

console.log(lib.sum(3, 5))

const argv = require('process').argv
console.log(argv)

const command = argv[2]
console.log(command, 'command')

const options = argv.slice(3)
console.log(options, 'options')


let [option, param] = options
console.log(option, param)
option = option.replace('--', '')


if (!command) console.log('请输入命令')
if (lib[command]) {
    lib[command]({ option, param });
} else {
    console.log('无效的命令') 
}
