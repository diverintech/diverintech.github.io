import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslationService } from './services/translate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NavbarComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Curriculum';

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.translationService.setLang(this.translationService.defaultLang);
  }
}
