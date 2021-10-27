const fs = require('fs');
const stream = require('stream');
const util = require('util');
const program = require('commander');


const TransformLab = require('./module/transform');
const {fileExistsSync} = require("./module/valid");

const pipeline = util.promisify(stream.pipeline);

const actions = async _ => {
    const { input, output, task } = program.opts();



    input === undefined && process.stdout.write('Enter the text and press ENTER to t1.1/t1.2 | press CTRL + C to exit: ')

    const ReadableStream =  typeof(input) === 'string' && fileExistsSync(input) ? fs.createReadStream(input) : process.stdin;

    const WriteableStream = typeof(output) === 'string' && fileExistsSync(output) ? fs.createWriteStream(output): process.stdout;


    try {
        if (fileExistsSync(input) || fileExistsSync(output) || input === undefined || output === undefined){
            await pipeline(
                ReadableStream,
                new TransformLab(task),
                WriteableStream
            )
        } else{
            process.stderr.write( `file not exist!!!\n`);
            process.exit(2);
        }

    } catch (e) {
        process.stderr.write( `${e.message}\n`);
        process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log('CODE: '+code));
process.on('SIGINT', _ => { process.exit(0); });

program
    .requiredOption('-t --task <task>', 'To select task 1 or task 2')
    .option('-i, --input <filename>', 'An input file')
    .option('-o, --output <filename>', 'An output file')
    .action(actions)

program.parse(process.argv);