function sumOfOddNumbers(n) {
    let currNum = 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
            console.log(currNum);
            sum += currNum
            currNum +=2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);