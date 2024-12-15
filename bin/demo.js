#!/usr/bin/env node
// console.log('肯德基疯狂星期四v我500')
const { program } = require("commander")
const chalk = require("chalk")
const inquirer = require("inquirer")
const ora = require('ora')
const figlet =  require("figlet")

figlet("zjbrook", function(err,data){
    if(err){
        console.log("Something went Wrong...")
        console.dir(err)
        return
    }
    console.log(data)
});
// import ora from 'ora';

// const spinner = ora('下载中...').start();

// setTimeout(() => {
// 	spinner.color = 'red';
// 	spinner.text = '网络较慢，请稍等...';
// }, 1000);

// setTimeout(() => {
// 	// spinner.succeed("下载成功")
// 	spinner.fail("下载失败")
// }, 4000);

// inquirer.prompt([{
//     type:'input',
//     name:'food',
//     message:'你吃什么？',
//     default:'汉堡包'
// },{
//     type:'confirm',
//     name:'hot',
//     message:'吃不吃辣？',
//     default:false
// }]).then((answers)=>{
//     console.log("answers:",answers)
// }).catch((error)=>{
//     if(error.isTtyError){

//     }else{
        
//     }
// })

// program.name('kfc-vme50').usage('<commond> [option]')

// program.option('-d, --debug', 'output extra debugging')
//     .option('-s, --small', 'small pizza size')
//     .option('-p, --pizza-type <type>', 'flavour of pizza')
//     .option('-v, --version', '1.1.1');

// program
//     .command('clone <source> [destination]')
//     .description('clone a repository into a newly created directory')
//     .action((source, destination) => {
//         console.log(source, destination);
//     });

// program.parse(process.argv)

// const options = program.opts()


// console.log(options)

// console.log(chalk.red("hahahahah"))
// console.log(chalk.yellow("v me 50"))
// console.log(chalk.yellow.bold("v me 50"))
// console.log(chalk.yellow.bold.bgBlue('xdddfdsfsdfds'))
