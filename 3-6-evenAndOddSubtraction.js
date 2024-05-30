function evenAndOddSubtraction(nums) {
    let sumOfEvven = 0;
    let sumOfOdd = 0;

    for (let i = 0; i < nums.length; i++) {
        const curNum = Number(nums[i]);
        if (curNum % 2 === 0) {
            sumOfEvven += curNum;
        }else {
            sumOfOdd += curNum
        }
    }
    let sum = sumOfEvven - sumOfOdd;
    console.log(sum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);
