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

module.exports.twosDifference = function  twosDifference (mas) {
    mas = mas.slice(1,mas.length-3).split(',')
    let newmas=[]
    let x = 0
    let y = 0
    let otvet=''
    for(let i=0;i<mas.length;i++){
        for(let j=0;j<mas.length;j++){
            if(+mas[i]-+mas[j]===2){
                newmas.push([+mas[i],+mas[j]])
            }
        }
    }
    for(let i=0;i<newmas.length;i=i+2){
        for(let j=i;j<newmas.length;j=j+2){
            if(newmas[i]+newmas[i+1]>newmas[j]+newmas[j+1]){
                x=newmas[i]
                y=newmas[i+1]
                newmas[i]=newmas[j]
                newmas[i+1]=newmas[j+1]
                newmas[j]=x
                newmas[j+1]=y
            }
        }
    }
    newmas.forEach((x,i) => i%2===0 ? otvet=otvet+'['+x+',' : otvet=otvet+x+'],')
 return `[${otvet}]`
}