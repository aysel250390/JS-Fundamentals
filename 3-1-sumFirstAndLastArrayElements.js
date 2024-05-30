function sumFirstAndLastArrayElements(nums) {
    
    const firstEl = nums[0];
    const lastEl = nums[nums.length - 1];
    const sum = firstEl + lastEl;

    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([5, 10]);
sumFirstAndLastArrayElements([2]);