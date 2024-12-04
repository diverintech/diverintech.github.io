import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' }
  ];

  selectedLanguage = 'en';

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    console.log(`${language}`);
  }

}
