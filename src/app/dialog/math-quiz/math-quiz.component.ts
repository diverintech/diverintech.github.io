import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MathQuizService } from '../../services/mathQuiz.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math-quiz',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatButtonModule, FormsModule],
  templateUrl: './math-quiz.component.html',
  styleUrls: ['./math-quiz.component.scss'],
})
export class MathQuizComponent {
  public userAnswer: number | null = null // Stores the user's answer; allows null for resetting the input field.
  public question: string = ''; // Holds the current math question as a string.
  public showInformation = false; // Controls the display of additional information after a correct answer.
  public tryAgain = false; // Tracks whether the user needs to try again after a wrong answer.
  public errorMessage = ''; // Holds the dynamic error message to be displayed when the user answers incorrectly.


  constructor(
    private mathService: MathQuizService,
    private dialogRef: MatDialogRef<MathQuizComponent>,
  ) {
    this.generateNewQuestion();
  }

  generateNewQuestion(): void {
    this.mathService.generateNewQuestion();
    this.question = this.mathService.getQuestion();
    this.userAnswer = null;
  }

  checkAnswer(): void {
    const correctAnswer = this.mathService.getResult();
    if (this.userAnswer === correctAnswer) {
      this.showInformation = true;
      this.closeDialog(true);
    } else {
      this.tryAgain = true;
      this.errorMessage = 'ERROR_MESSAGE';
      this.generateNewQuestion();
    }
  }

  closeDialog(success: boolean = false): void {
    this.dialogRef.close(success);
  }
}




