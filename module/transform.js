const { Transform } = require('stream');

const { strictEqual, twosDifference} = require('./code');


class TransformLab extends Transform {
    constructor(task) {
        super();
        this.action = task;
    }

    _transform(chunk, _, done) {
        let result;
        switch (this.action) {
            case 'task1':
                    result = strictEqual(chunk.toString('utf8'))
                break;
            case 'task2':
                result = twosDifference(chunk.toString('utf8'));
                break;
            default:
                process.stderr.write(' Erorr: Action not found\n');
                process.exit(1);
        }
        this.push(result);
        done();
    }
}

module.exports = TransformLab;