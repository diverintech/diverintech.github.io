import { Routes } from '@angular/router';
import { WorkComponent } from './features/work/work.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
