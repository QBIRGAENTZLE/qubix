export class Skill {

    colorLabel: string;
    label: string;
    level: string;
    value: number;

    constructor(skill: any) {
        this.label = skill.skill;
        this.value = skill.value;

        this.setLevel();
    }

    private setLevel = (): void => {
        if (this.value < 25) {
            this.colorLabel = 'danger';
            this.level = 'NOTIONS';
        } else if (this.value < 75) {
            this.colorLabel = 'warning';
            this.level = 'INTERMEDIAIRE';
        } else {
            this.colorLabel = 'success';
            this.level = 'MAITRISE';
        }
    }

}
