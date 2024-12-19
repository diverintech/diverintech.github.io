import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UnderConstructionComponent } from '../../components/under-construction/under-construction.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {


}
