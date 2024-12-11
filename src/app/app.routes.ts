import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { WorkComponent } from './pages/work/work.component';

export const routes: Routes = [
    { path: '', component: WorkComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'work', component: WorkComponent },
    { path: 'portfolio', component: PortfolioComponent },
];
