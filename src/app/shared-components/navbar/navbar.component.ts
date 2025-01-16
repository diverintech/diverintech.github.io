import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSelectorComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  linkedinUrl = `${environment.urls.linkedinUrl}`;
  githubUrl = `${environment.urls.githubUrl}`;

  public activeSection = 'about';
  public menuOpen = false;

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public closeMenu() {
    this.menuOpen = false;
  }

  public scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection = section;
    this.closeMenu();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['about', 'stack', 'work', 'portfolio'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
