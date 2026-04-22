export type PasswordStrength = 'weak' | 'medium' | 'strong' | 'empty';

export function checkStrength(password: string): PasswordStrength {
  if (!password) return 'empty';
  
  let score = 0;
  if (password.length > 6) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return 'weak';
  if (score <= 3) return 'medium';
  return 'strong';
}