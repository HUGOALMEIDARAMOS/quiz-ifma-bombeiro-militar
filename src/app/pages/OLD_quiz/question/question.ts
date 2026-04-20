import { Component, inject } from '@angular/core';
import { QuizService } from '../../../core/quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.scss',
})
export class Question {
   quiz = inject(QuizService);
  router = inject(Router);

  select(qId: number, optId: string) {
    this.quiz.answer(qId, optId);
  }

  isSelected(qId: number, optId: string) {
    return this.quiz.answers()[qId] === optId;
  }

  next() {
    this.quiz.next();
  }

  finish() {
    this.router.navigate(['/result']);
  }
}
