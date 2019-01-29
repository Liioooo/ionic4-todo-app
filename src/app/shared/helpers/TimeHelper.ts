export class TimeHelper {

    static convertToUTC(d: Date): Date {
        const currentDate = new Date(Date.now());
        d.setTime(d.getTime() + currentDate.getTimezoneOffset() * 1000 * 60);
        return d;
    }

    static addTimeMillis(d1: Date, toAdd: number): Date {
        const newDate = d1;
        newDate.setTime(newDate.getTime() + toAdd);
        return newDate;
    }

    static getCurrentDate(): Date {
        const currentDate = new Date(Date.now());
        currentDate.setTime(currentDate.getTime() - currentDate.getTimezoneOffset() * 1000 * 60);
        return currentDate;
    }

    static getCurrentDateISO(): string {
        return this.getCurrentDate().toISOString();
    }
}
