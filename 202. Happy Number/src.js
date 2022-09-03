/**
 * @param {number} n
 * @return {boolean}
 */

 var isHappy = function(n) {
    const constraint = (1 <= n <= Math.pow(2, 31) - 1);
    
    if(!constraint)
        return

    let result = 0;
    let helper = n;
    const rememberNumber = [];

    while(1){
        if(rememberNumber.indexOf(helper) != -1)
            return false
            
        const helperSplitted = helper.toString().split("");
        result = 0;

        for(let i = 0 ; i < helperSplitted.length ; i++){
            result = result + Math.pow(Number(helperSplitted[i]), 2);
        }

        if(result == 1)
            break

        rememberNumber.push(helper);
        helper = result;
    }

    return true
};


console.log(isHappy(19))