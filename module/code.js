module.exports.strictEqual = function  strictEqual (primer) {
    let otvet;
    let x = '';
    let y = '';
    let znak;

    for (let i = 0; i < primer.length; i++) {
        if (
            primer[i] === '*' ||
            primer[i] === '/' ||
            primer[i] === '-' ||
            primer[i] === '+'
        ) {
            znak = primer[i];
        }
    }
    let [first, last] = primer.split(znak);
    for (let i = 0; i < first.length; i++) {
        if (Number.isInteger(+first[i]) || first[i] === '.' ) {
            x = x + first[i];
        }
    }
    for (let i = 0; i < last.length; i++) {
        if (Number.isInteger(+last[i]) || last[i] === '.') {
            y = y + last[i];
        }
    }
    switch (znak) {
        case '*':
            otvet = (+x * +y);
            break;
        case '-':
            otvet = (+x - +y);
            break;
        case '+':
            otvet = (+x + +y);
            break;
        case '/':
            otvet = (+x / +y);
            break;
}
    return `${otvet}\n`
}

