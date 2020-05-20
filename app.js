const yargs = require('yargs');
const chalk = require('chalk');
const commands = require('./commands');

let argv = yargs
    .command("create", "Create a new file in the system", {
        filename: {
            describe: "File Name",
            alias: "f",
            demandOption: true
        }
    })
    .help()
    .alias("help", "h")
    .argv;

let command = yargs.argv._[0];
let fileName = argv.filename;


command === "create" ? commands.create(fileName) : console.log(chalk.red(`Please use "create" command to create the file or use node app -h for instruction.`))

