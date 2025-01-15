import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  fullText = 'Software Developer';
  typedText = '';
  typingSpeed = 100;

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
