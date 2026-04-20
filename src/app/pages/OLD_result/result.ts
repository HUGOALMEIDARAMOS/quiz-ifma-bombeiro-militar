import { Component, inject } from '@angular/core';
import { QuizService } from '../../core/quiz';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class Result {
   quiz = inject(QuizService);
}
