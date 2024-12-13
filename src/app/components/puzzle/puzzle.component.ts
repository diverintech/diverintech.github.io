import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.scss'
})
export class PuzzleComponent {

  items = ['Peça 1', 'Peça 2', 'Peça 3', 'Peça 4'];

  drop(event: CdkDragDrop<string[]>): void {
    const previousIndex = this.items.findIndex(d => d === event.item.data);
    const currentIndex = event.currentIndex;

    this.items.splice(previousIndex, 1);
    this.items.splice(currentIndex, 0, event.item.data);
  }

  puzzleCompleted: boolean = false;

  completePuzzle(): void {
    this.puzzleCompleted = true;
  }
}
