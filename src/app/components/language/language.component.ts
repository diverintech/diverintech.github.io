import { Component } from '@angular/core';
import { TranslationService } from '../../services/translate.service';

@Component({
  selector: 'app-language',
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  constructor(private translationService: TranslationService) { }

  changeLanguage(language: string) {
    this.translationService.setLang(language);
  }

  isCurrentLanguage(language: string): boolean {
    return this.translationService.defaultLang === language;
  }
}
