import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppAuthLayout } from "../../shared/components/app-auth-layout/app-auth-layout";
import { toSignal } from '@angular/core/rxjs-interop';
import { checkStrength } from '../../core/utils/password-utils';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, AppAuthLayout, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  hide = signal(true);
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  private passwordValue = toSignal(
    this.loginForm.controls.password.valueChanges, 
    { initialValue: '' }
  );

  passwordStrength = computed(() => checkStrength(this.passwordValue() ?? ''));

  strengthLabel = computed(() => {
    const s = this.passwordStrength();
    if (s === 'weak') return 'Senha Fraca';
    if (s === 'medium') return 'Senha Razoável';
    if (s === 'strong') return 'Senha Forte!';
    return '';
  });

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
