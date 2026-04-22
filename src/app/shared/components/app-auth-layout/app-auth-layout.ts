import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterLink],
  templateUrl: './app-auth-layout.html',
  styleUrl: './app-auth-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAuthLayout {
  subtitle = input.required<string>();
  footerText = input.required<string>();
  footerLink = input.required<string>();
  footerLinkText = input.required<string>();
}
