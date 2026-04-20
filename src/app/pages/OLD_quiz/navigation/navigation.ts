import { Component, inject } from '@angular/core';
import { QuizService } from '../../../core/quiz';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  quiz = inject(QuizService);
}
