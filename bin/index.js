#!/usr/bin/env node

const { program } = require("commander")
const figlet = require('figlet')
const inquirer = require("inquirer")
const fs = require("fs-extra")
const path = require("path")
const { type } = require("os")
const gitClone = require("git-clone")
const ora = require("ora")
const chalk = require("chalk")

// const projectList = {
//     'vue':'git@github.com:kfc-vme50/vue-template.git',
//     'react':'git@github.com:kfc-vme50/react-template.git',
//     'react&ts':"git@github.com:kfc-vme50/react-template-ts.git",
//     'vue&ts':'git@github.com:kfc-vme50/vue-template-ts.git'
// }

const projectList = {
    'vue': 'git@github.com:zjbrook/PatrollingSystem.git',
    'react': 'git@github.com:zjbrook/Inspection.git',
    'react&ts': "git@github.com:zjbrook/Nodejs-tutorial.git",
    'vue&ts': 'git@github.com:zjbrook/PatrollingSystem.git'
}


// 首行提示
program.name("kfc-vme50").usage("<command> [options]")

// 版本号
program.version(`v${require('../package.json').version}`)

// 给help信息添加提示
program.on("--help", function () {
    console.log(figlet.textSync('KFC-VME50', {
        font: "Ghost",
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }))
})

// 命令
// 创建项目的命令
program.command('create <app-name>').description("创建一个新的项目").action(async function (name) {
    // 创建项目的逻辑
    // 创建一个名字为name的文件夹，把我们模板项目的代码都放到这个文件夹下面
    // 1、先判断有没有名字为name的文件夹
    console.log(path.join(process.cwd(), name))
    const targetPath = path.join(process.cwd(), name)
    if (fs.existsSync(targetPath)) {
        //  存在的话
        const answers = await inquirer.prompt([{
            type: 'confirm',
            message: '是否覆盖之前的文件夹？',
            default: false,
            name: 'overwrite'
        }])
        if (answers.overwrite) {
            fs.remove(targetPath)
            console.log("删除成功")
        } else {
            // 直接返回 去起一个新的名字创建
            return
        }
        // console.log("answers:",answers)
    }
    // 新建
    // gitClone()
    const res = await inquirer.prompt([{
        type: 'list',
        message: '选择什么框架去新建项目？',
        name: 'type',
        choices: [{
            name: 'vue',
            value: 'vue'
        }, {
            name: 'react',
            value: 'react'
        }]
    }, {
        type: 'list',
        message: '是否用用ts?',
        name: 'ts',
        choices: [{
            name: '是',
            value: true
        }, {
            name: "否",
            value: false
        }]
    }])
    // console.log("res:",res)
    const key = res.type + (res.ts ? '&ts' : '')
    const spinner = ora("下载中...").start()
    gitClone(projectList[key], name, { checkout: 'master' }, function (err) {
        if (err) {
            spinner.fail('下载失败')
            console.dir(err)
        } else {
            spinner.succeed("下载成功")
            console.log("Done, now run:")
            console.log(chalk.green(`\n cd ${name}`))
            console.log(chalk.green(`npm install`))
            console.log(chalk.green(`npm run dev`))
        }
    })
})

program.parse(process.argv)