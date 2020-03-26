'use strict'

const fibonacci = ((array=[0, 1], length=233) => {
    let num1 = array[0],
          num2 = array[1],
          next = 0

    while (next < length) {
        next = num1 + num2;
        num1 = num2;        
        num2 = next;
        array.push(next);
    }

    return array;
});

console.log(fibonacci());


const isFibonnaci = (num) => {

    let verify = fibonacci().includes(num);

    return verify;
}


module.exports = {
    fibonacci,
    isFibonnaci
}

