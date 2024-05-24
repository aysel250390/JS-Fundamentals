function requiredReading(pagesBook, pagesPerHour, days) {
    let totalTime = pagesBook / pagesPerHour;
    let hourPerDay = totalTime / days;
    console.log(hourPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);