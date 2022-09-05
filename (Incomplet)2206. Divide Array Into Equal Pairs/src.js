/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var divideArray = function(nums) {    
    const keysPairStorage = {};
    let controller = false;
    for(let i = 0; i < nums.length; i++){

        if(!(keysPairStorage[nums[i]])){
            keysPairStorage[nums[i]] = true
            controller = false;
            continue
        }

        if(checkCollision(keysPairStorage, nums[i])){

            keysPairStorage[nums[i]] = `${keysPairStorage[nums[i]]}` + nums[i]
            
            if(checkEvenNumber(keysPairStorage[nums[i]]))
                controller = true;
            else
                controller = false;
            continue
        }

        keysPairStorage[nums[i]] = `${nums[i]}`;
        controller = true;
    }

    return {keysPairStorage,controller};
};

const checkCollision = (keysPairStorage, key) => {
    let value = key;
    return keysPairStorage[key][0] == value;
}

const checkEvenNumber = (value) => {
    return (value.length+1)%2==0;
}

console.log(divideArray([18,19,5,5,18,19,5,6,12,19,13,4,16,11,4,16,10,8,12,8,2,1,8,17,4,18,3,5,16,2,16,12,17,16,7,16,2,17,19,9,1,20,17,17,4,6]))