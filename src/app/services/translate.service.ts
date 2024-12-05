import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AppTranslateService {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }
}
