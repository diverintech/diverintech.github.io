import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PuzzleComponent } from '../../components/puzzle/puzzle.component';
import { MathQuizComponent } from '../../components/math-quiz/math-quiz.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showTextAboutMe: boolean = false;

  constructor(private dialog: MatDialog) { }

  openPuzzle(): void {
    const dialogRef = this.dialog.open(PuzzleComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showTextAboutMe = true;
      }
    });
  }

  openMathQuiz(): void {
    const dialogRef = this.dialog.open(MathQuizComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showTextAboutMe = true;
      }
    });
  }


}



