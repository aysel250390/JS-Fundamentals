function dayOfWeek(dayNumber) {
    const days = [
        'Monday',     // index: 0, day:1
        'Tuesday',    // index: 1, day:2
        'Wednesday',  // index: 2, day:3
        'Thursday',   // index: 3, day:4
        'Friday',     // index: 4, day:5
        'Saturday',   // index: 5, day:6
        'Sunday'      // index: 6, day:7
    ];
    const result = days[dayNumber - 1];

    if (result !== undefined) {
        console.log(result);
    }else {
        console.log('Invalid day!');
    }

}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);