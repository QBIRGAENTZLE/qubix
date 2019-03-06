import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(duration: number, /*args?: any*/): any {
        if (duration > 0) {
            duration = duration / 1000; // transform millisecondes in seconds
            const years = Math.trunc(duration / 31557600);
            let remainingTime = duration % 31557600;
            const months = Math.ceil(remainingTime / 2629800);
            remainingTime = remainingTime % 2629800;

            return this.formatReturn(years, months);
        }
    }

    private formatReturn = (years: number, months: number): string => {
        let returnString = '(';

        switch (years) {
            case 0:
                break;
            case 1:
                returnString += `${years} an `;
                break;
            default:
                returnString += `${years} ans `;
                break;
        }

        switch (months) {
            case 0:
                break;
            default:
                returnString += `${months} mois`;
                break;
        }
        return `${returnString})`;
    }
}
