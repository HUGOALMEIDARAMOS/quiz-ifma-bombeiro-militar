import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //  install = inject(InstallService); 
  protected readonly title = signal('simulado-ifma');
  
}
