import { Component, inject } from '@angular/core';
import { QuizService } from '../../../core/quiz';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  quiz = inject(QuizService);

  get time() {
    const t = this.quiz.timeLeft();
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
}
