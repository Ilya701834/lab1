module.exports.strictEqual = function  strictEqual (primer) {
    let otvet;
    let x = '';
    let y = '';
    let znak;

    try{
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

        if(x.trim().length===0||y.trim().length===0){
            return 'Enter a number to the left and right of the sign. Input example: \'rere343 * 433hfdhf\'\n'
        }else{
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

    }catch (e) {
        console.log('Missing sign *, -, + or /. Input example: \'rere343 * 433hfdhf\'\n')
    }

}

module.exports.twosDifference = function  twosDifference (mas) {
        if(mas[0]==='[' && mas[mas.length-3]===']' && mas.indexOf(',')!==mas.lastIndexOf(',')){
            mas = mas.slice(1,mas.length-3).split(',')
            let newmas=[]
            let x = 0
            let y = 0
            let otvet=''
            for(let i=0;i<mas.length;i++){
                for(let j=0;j<mas.length;j++){
                    if(+mas[i]-+mas[j]===2){
                        newmas.push(+mas[i])
                        newmas.push(+mas[j])
                    }
                }
                if( !Number.isInteger(+mas[i])){
                    return 'Enter a numeric array. Record example: [1,2,3,4,5,6,7,8]\n'
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
            newmas.forEach((x,i) => i%2===0?  otvet=otvet+'['+x+',':  otvet=otvet+x+'],')
            return `[${otvet.slice(0,-1)}]\n`
        }else {
            return 'Enter a numeric array. Record example: [1,2,3,4,5,6,7,8]\n'
        }
}