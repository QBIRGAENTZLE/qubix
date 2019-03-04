export class Experience {

    companyName: string;
    date: { start: Date, end: Date } = { start: null, end: null };
    description: string;
    duration: number; // IN MILLISECONDS
    jobTitle: string;
    place: string;

    constructor(exp) {
        this.companyName = exp.companyName;
        this.date = exp.date;
        this.description = exp.description;
        this.jobTitle = exp.jobTitle;
        this.place = exp.place;

        this.duration = this.date.end.valueOf() - this.date.start.valueOf();
    }
}
