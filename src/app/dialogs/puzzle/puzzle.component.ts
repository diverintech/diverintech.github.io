import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UnderConstructionComponent } from '../../shared-components/under-construction/under-construction.component';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule, TranslateModule, UnderConstructionComponent],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.scss',
})
export class PuzzleComponent {
  puzzleCompleted = false;

  completePuzzle(): void {
    this.puzzleCompleted = true;
  }
}
