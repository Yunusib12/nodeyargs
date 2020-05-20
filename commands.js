const fs = require('fs');
const chalk = require('chalk');

const create = (fileName) => {

    let sentence = "You are awesome";
    let fileNameArray = [];
    let hasMatch = false;

    //Checking if the file Name exist
    try {

        fileNameArray = JSON.parse(fs.readFileSync('./datas/filenamedb.json'));
        hasMatch = fileNameArray.find((x) => x.fileName === fileName);

    } catch (error) {
        //console.log(error);
    }

    if (hasMatch) {
        console.log(chalk.red(`A file with the name " ${chalk.underline.red(fileName)} " exist! Please choose another one.`));
    } else {
        //Adding the file Name into the filenamedb.json
        fileNameArray.push({ fileName });
        fs.writeFile('./datas/filenamedb.json', JSON.stringify(fileNameArray), (error) => {
            if (error) throw error
        });

        //Creating the file in the system
        fs.writeFile(`./datas/${fileName}`, sentence, (err) => {
            if (err) throw err
            console.log(chalk.green(`The File " ${chalk.green.underline(fileName)} " was created successfuly!`));
        });
    }
};

module.exports = {
    create
}