import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { PROJECTS_EN } from '../../data/portfolio.data.en';
import { TechIconPipe } from '../../pipes/tech-icon.pipe';
import {TranslationService} from "../../core/services/translate.service";
import {Projects} from "../../interfaces/portfolio.interface";

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
