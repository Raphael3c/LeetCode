/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const constraint = 1 <= left <= right <= Math.pow(10, 4);

  if (!constraint) return;

  const returnArray = [];

  for (let i = left; i <= right; i++) {
    let number1 = Number(i);

    const number1Split = number1.toString().split("");

    let isSelfDividingNumber = true;

    for (let j = 0; j < number1Split.length; j++) {

      if (!(number1 % number1Split[j] === 0)) isSelfDividingNumber = false;

    }

    if (isSelfDividingNumber) returnArray.push(number1)
  }

  return returnArray;
};