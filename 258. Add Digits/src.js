/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    const constraint = 0 <= num <= Math.pow(2, 31) - 1;
    if(!constraint)
        return

    const numArray = num.toString();
    let sum = 0;

    for(let unit in numArray){
        sum = sum + Number(numArray[unit]) 
    }

    if(sum.toString().length > 1)
       sum = addDigits(sum)
    
    return sum
};