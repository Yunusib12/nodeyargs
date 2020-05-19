const yargs = require('yargs');

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
let filename = argv.filename;

console.log(argv, command, filename);