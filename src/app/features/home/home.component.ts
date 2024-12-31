import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from '../../shared-components/language-selector/language-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  skills: string[] = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'HTML',
    'CSS',
    'SCSS',
  ];

  // Função chamada ao passar o mouse sobre uma skill
  highlightSkill(skill: string): void {
    // Aqui você pode implementar a lógica para destacar a skill
    console.log('Skill hovered:', skill);
  }

  // Função chamada ao retirar o mouse de cima de uma skill
  removeHighlight(skill: string): void {
    // Aqui você pode implementar a lógica para remover o destaque da skill
    console.log('Skill mouseout:', skill);
  }
}
