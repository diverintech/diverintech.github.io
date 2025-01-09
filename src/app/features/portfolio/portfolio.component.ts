import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TechIconPipe } from '../../pipes/tech-icon.pipe';
import { TranslationService } from '../../core/services/translate.service';
import { Projects } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, TechIconPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  public projects: Projects[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.portfolio$.subscribe((portfolioData) => {
      this.projects = portfolioData;
    });
  }
}
