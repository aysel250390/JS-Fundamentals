function sumEvenNumbers(nums) {
    let sumOfEvven = 0;

    for (let i = 0; i < nums.length; i++) {
        const curNum = Number(nums[i]);
        
        if (curNum % 2 === 0) {
            sumOfEvven += curNum;
        }
    }
    console.log(sumOfEvven);
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);