/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {

    const array = new Array(s.length)
    let initialPosition = 0;
    let endPosition = 0;
    let aux = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === c){
            endPosition = i
            aux = 0
            for(let j = endPosition; j >= initialPosition; j--){
                array[j] = aux;
                aux = aux + 1;
            }
            if(initialPosition != 0){
                const quantityElements = initialPosition - endPosition
                if(quantityElements > 1){
                    const count = Math.floor(quantityElements/2)
                    aux = 1
                    for(let j = initialPosition; j < count+initialPosition; j++){
                        array[j] = aux;
                        aux = aux + 1;
                    }
                }
            }  
            initialPosition = endPosition+1;
        }
    }
    return array
};

console.log(shortestToChar("loveleetcode", "e"))