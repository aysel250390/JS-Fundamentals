function evenAndOddSubtraction(arr) {
    
    let sumOfEvven = 0;
    let sumOfOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]); //const curNum = Number(nums[i]);
    }

    for (let num of arr) {
        if (num % 2 === 0) {
            sumOfEvven += num;
        }else {
            sumOfOdd += num
        }   
    }
    let difference = sumOfEvven - sumOfOdd;
    console.log(difference);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])