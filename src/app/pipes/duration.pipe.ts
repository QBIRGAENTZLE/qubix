import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(duration: number, args: string[]): any {
        let years = 0;
        let months = 0;
        let weeks = 0;
        let remainingTime: number;

        if (duration > 0) {
            duration = duration / 1000; // transform millisecondes in seconds

            if (args.includes('year')) {
                if (args.indexOf('year') === (args.length - 1)) {
                    years = Math.round(duration / 31536000);

                } else {
                    years = Math.trunc(duration / 31536000);
                    remainingTime = duration % 31536000;

                }
            }

            if (args.includes('month')) {
                if (args.indexOf('month') === (args.length - 1)) {
                    months = Math.round(remainingTime / 2592000);

                } else {
                    months = Math.trunc(remainingTime / 2592000);
                    remainingTime = remainingTime % 2592000;

                }
            }

            if (args.includes('week')) {
                if (args.indexOf('week') === (args.length - 1)) {
                    weeks = Math.round(remainingTime / 604800);

                } else {
                    weeks = Math.trunc(remainingTime / 604800);
                    remainingTime = remainingTime % 604800;

                }
            }

            return this.formatReturn(years, months, weeks);
        }
    }

    private formatReturn = (years: number, months: number, weeks: number): string => {
        let returnString = '';

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
                returnString += `${months} mois `;
                break;
        }

        switch (weeks) {
            case 0:
                break;
            case 1:
                returnString += `${weeks} semaine `;
                break;
            default:
                returnString += `${weeks} semaines `;
                break;
        }

        return `${returnString}`;
    }
}
