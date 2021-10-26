const fs = require('fs');
const stream = require('stream');
const util = require('util');
const program = require('commander');


const TransformLab = require('./module/transform');

const pipeline = util.promisify(stream.pipeline);

const actions = async _ => {
    const { input, output, task } = program.opts();

    process.stdout.write('Enter text or an array press ENTER. Press CRTL + C to exit. \n')

    const ReadableStream = typeof(input) === 'string' ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = typeof(output) === 'string' ? fs.createWriteStream(output): process.stdout;

    try {
        await pipeline(
            ReadableStream,
            new TransformLab(task),
            WriteableStream
        );
    } catch (e) {
        process.stderr.write(` ${e.message}\n`);
        process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log('CODE: '+code));
process.on('SIGINT', _ => { process.exit(0); });

program
    .option('-t --task <task>', 'To select task 1 or task 2')
    .option('-i, --input <filename>', 'An input file')
    .option('-o, --output <filename>', 'An output file')
    .action(actions)

program.parse(process.argv);