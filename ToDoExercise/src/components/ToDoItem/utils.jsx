// 1000 ms/sec * 60 sec/min * 60 min/hr * 24 hr/day
const millisecInDay = 1000 * 60 * 60 * 24;

// Return number of days between dateCompare and today
export function daysFromToday(dateCompare) {
    const currentDate = new Date();
    const dueDate = new Date(dateCompare);
    const timeDiff = dueDate - currentDate;
    return Math.ceil(timeDiff / millisecInDay);
}

// Return HTML message based on task's set dueDate
export function setDueDateMsg(dueDate) {
    if (!dueDate) {
        return <>no due date set</>;
    } else {
        const daysUntilDue = daysFromToday(dueDate);

        switch (true) {
            case daysUntilDue == -1:
                return <>task is 1 day overdue</>;
            case daysUntilDue < 0:
                return <>task is {daysUntilDue * -1} days overdue</>;
            case daysUntilDue == 0:
                return <>task is due today</>;
            case daysUntilDue == 1:
                return <>task is due in 1 day</>;
            default:
                return <>task is due in {daysUntilDue} days</>;
        }
    }
}