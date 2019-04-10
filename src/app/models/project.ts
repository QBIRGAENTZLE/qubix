export class Project {

    name: string;
    duration: number;
    shortDescription: string;
    description: string;
    url: string;
    stack: string[];
    year: string;
    team: string[];

    constructor(project: any) {
        this.name = project.name;
        this.duration = project.duration;
        this.shortDescription = project.shortDescription;
        this.description = project.description;
        this.url = project.url;
        this.stack = project.stack;
        this.year = project.year;
        this.team = project.team;
    }
}
