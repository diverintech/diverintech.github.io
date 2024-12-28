import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translate.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  constructor(private translationService: TranslationService) {}

  changeLanguage(language: string) {
    this.translationService.setLang(language);
  }

  isCurrentLanguage(language: string): boolean {
    return this.translationService.defaultLang === language;
  }
}
