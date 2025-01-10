import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  fullText = 'Software Developer';
  typedText = '';
  typingSpeed = 100;

  skills: { name: string; category: string }[] = [
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'HTML', category: 'Markup' },
    { name: 'CSS', category: 'Styling' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'CodeceptJS', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' },
    { name: 'GitHub', category: 'Version Control' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < this.fullText.length) {
        this.typedText += this.fullText[currentIndex];
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
