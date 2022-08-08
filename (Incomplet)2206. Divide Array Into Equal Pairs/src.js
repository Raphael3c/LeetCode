/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    const constraint =  nums.length%2==0 && 2 <= nums.length <= 1000

    let teste = []
    
    if(!constraint)
        return
    
    for(let i = 0; i < nums.length; i++){
        if(!nums.length)
            teste.push(nums[i]);
        
    }
};