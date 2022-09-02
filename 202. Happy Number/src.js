/**
 * @param {number} n
 * @return {boolean}
 */

 var isHappy = function(n) {
    if(!(1 <= n <= Math.pow(2, 31) - 1))
        return

    let result = 0;
    let number = n;

    while(1){

        if(result == n*n)
            return false

        const numberSplitted = number.toString().split("");
        result = 0;

        for(let i = 0 ; i < numberSplitted.length ; i++){
            result = result + Math.pow(Number(numberSplitted[i]), 2);
        }

        if(result == 1)
            break

        number = result;
    }

    return true
};

console.log(isHappy(7))