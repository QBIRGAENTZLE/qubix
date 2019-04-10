export class Formation {
    schoolName: string;
    place: string;
    years: { start: number, end: number } = { start: null, end: null };
    degree: { level: string, name: string } = { level: null, name: null };
    description: string;
    url: string;

    constructor(form: any) {
        this.schoolName = form.schoolName;
        this.place = form.place;
        this.years = form.years;
        this.degree = form.degree;
        this.url = form.url;
        this.description = form.description;
    }
}
