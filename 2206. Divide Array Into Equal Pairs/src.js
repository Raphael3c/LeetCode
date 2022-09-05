/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var divideArray = function(nums) {    
    if(!(nums.length%2 == 0))
        return false;

    var pairArray = [];

    for(let i = 0; i < nums.length; i++){
        if(!(pairArray.indexOf(nums[i]) != -1)){
            pairArray.push(nums[i])
            continue
        }else{
            const secondPairIndex = pairArray.findIndex((value) => {
                return value == nums[i];
            });
            let aux = pairArray[pairArray.length-1];
            pairArray[pairArray.length-1] = pairArray[secondPairIndex];
            pairArray[secondPairIndex] = aux;
            pairArray.pop();
        }
    }

    if(pairArray.length > 0)
        return false

    return true;
};