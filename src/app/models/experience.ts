export class Experience {

    companyName: string;
    date: { start: Date, end: Date } = { start: null, end: null };
    description: string;
    duration: number; // IN MILLISECONDS
    jobTitle: string;
    place: string;

    constructor(exp: any) {
        this.companyName = exp.companyName;
        this.date.start = new Date(exp.date.start);

        if (exp.date.end) {
            this.date.end = new Date(exp.date.end);
            this.duration = this.date.end.valueOf() - this.date.start.valueOf();

        } else {
            this.duration = 0;
        }
        this.description = exp.description;
        this.jobTitle = exp.jobTitle;
        this.place = exp.place;

    }
}
