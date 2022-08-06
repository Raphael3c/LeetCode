/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    const constraint = 1 <= left <= right <= Math.pow(10,4);
    if(!constraint)
        return
    const returnArray = new Array(right);
    let numberFirstHalfSplit
    let numberSecondHalfSplit
    //const maxIterator = right%2===0 ? Math.floor(right/2) - 1 : Math.floor(right/2) 
    if(right%2===0){
        const maxIterator = Math.floor(right/2) - 1 
        for(let i = left; i <= maxIterator; i++){
            numberFirstHalfSplit = i.toString().split("")
            numberSecondHalfSplit = (i+maxIterator).toString().split("")
            const takeMax = numberFirstHalfSplit.length > numberSecondHalfSplit.length ? numberFirstHalfSplit.length : numberSecondHalfSplit.length
            let isSelfDividingNumberFirst = true;
            let isSelfDividingNumberSecond = true;
            for(let j = 0; j < takeMax; j++){
                if(j < numberFirstHalfSplit.length){
                    if(!(i%numberFirstHalfSplit[j]===0))
                        isSelfDividingNumberFirst = false
                }
                if(j < numberSecondHalfSplit.length){
                    if(!(i+maxIterator)%numberSecondHalfSplit[j]===0)
                        isSelfDividingNumberSecond = false
                }
            }
            if(isSelfDividingNumberFirst)
                returnArray[i] = i;
            if(isSelfDividingNumberSecond)
                returnArray[i+maxIterator] = i+maxIterator; 
        }   
    }else{
        const maxIterator = Math.floor(right/2) 
    }


    //Quando for impar, a gente pega apenas o piso e no fim faz, fora do laço o ultimo calculo

    return returnArray    
};

console.log(selfDividingNumbers("1","22"))