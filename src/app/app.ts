import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";

const theme = signal<'light' | 'dark'>('light');

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: `
    :host {
      display: block;
      height: 100vh;
    }
  `,
})
export class App {
  //  install = inject(InstallService); 
  protected readonly title = signal('simulado-ifma');

  //  constructor() {
  //   effect(() => {
  //     document.documentElement.style.colorScheme = theme();
  //   });
  // }

  // toggleTheme() {
  //   theme.update(t => t === 'light' ? 'dark' : 'light');
  // }
  
}
