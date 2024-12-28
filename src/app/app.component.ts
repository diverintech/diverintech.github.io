import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from '@angular/router';
import { FooterComponent } from './shared-components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { TranslationService } from './core/services/translate.service';
import { NavbarComponent } from './shared-components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'Curriculum';
  public isHomePage = false;

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.translationService.setLang(this.translationService.defaultLang);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHomePage =
          this.router.url === '/' || this.router.url === '/home';
      });
  }
}
