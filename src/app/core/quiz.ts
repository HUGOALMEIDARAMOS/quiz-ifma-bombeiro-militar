import { Injectable, signal, computed } from '@angular/core';
import { QUESTIONS } from '../data/question';


@Injectable({ providedIn: 'root' })
export class QuizService {

  questions = signal(QUESTIONS);
  currentIndex = signal(0);

  answers = signal<Record<number, string>>({});

  timeLeft = signal(180 * 60); // 3h

  constructor() {
    this.startTimer();
  }

  currentQuestion = computed(() =>
    this.questions()[this.currentIndex()]
  );

  answer(qId: number, optId: string) {
    this.answers.update(a => ({ ...a, [qId]: optId }));
  }

  next() {
    if (this.currentIndex() < this.questions().length - 1) {
      this.currentIndex.update(i => i + 1);
    }
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  score = computed(() => {
    return this.questions().filter(q =>
      this.answers()[q.id] === q.correctOptionId
    ).length;
  });

  startTimer() {
    setInterval(() => {
      this.timeLeft.update(t => t - 1);
    }, 1000);
  }
}