/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    const constraint = 1 <= n <= 1000 
    if(!constraint)
        return
    let sumAux = 1
    let sum = 0
    let sumBase = 1
    for(let i = 1; i <= n; i++){
        sum = sum + sumAux
        sumAux++;
        if(i > 1 && i%7==0){
            sumBase += 1
            sumAux = sumBase
        }
    }
    
    return sum;
};

console.log(totalMoney(20))