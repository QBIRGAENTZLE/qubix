import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Output() toggleMenuOutput: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        public translateService: TranslateService
    ) {

    }

    public changeLang = (): void => {
        switch (this.translateService.currentLang) {
            case 'fr':
                this.translateService.use('en');
                break;
            case 'en':
                this.translateService.use('fr');
                break;
        }
    }

    public toggleMenu = (): void => {
        this.toggleMenuOutput.emit();
    }

}
