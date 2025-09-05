// 1000 ms/sec * 60 sec/min
const millisecPerMin = 1000 * 60;

export function calculateAvgMinutes(intArr) {
    let avgMillisecondsWorked = (intArr.reduce((acc, curr) => acc + curr, 0)) / intArr.length
    let avgMinutesWorked = avgMillisecondsWorked / millisecPerMin

    return avgMinutesWorked.toFixed(2);
}