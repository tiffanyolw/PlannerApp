// Use the given date and time to create a new Date
export function convertDateTime(date: Date, time: Date): Date {
    let dateTime = new Date(date);
    const temp = new Date(time);
    const hours = temp.getHours();
    const minutes = temp.getMinutes();
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);

    return dateTime;
}