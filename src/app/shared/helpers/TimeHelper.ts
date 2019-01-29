export class TimeHelper {

    static addTime(d1: Date, d2: Date): Date {
        const newDate = d1;
        newDate.setTime(newDate.getTime() + d2.getTime());
        return newDate;
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
