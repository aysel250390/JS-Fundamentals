function sumDigits(num) {
    let sum = 0;
    let numStr = num + ''; // let numStr = `${num}`; let numStr = String(num); let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        let curDigit = Number(numStr[i]);
        sum += curDigit;
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);