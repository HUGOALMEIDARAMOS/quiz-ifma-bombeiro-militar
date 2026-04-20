import { getTestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { provideZonelessChangeDetection } from '@angular/core';

// 1. Inicializa o ambiente com teardown habilitado
getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting(),
  {
    teardown: { destroyAfterEach: true }
  }
);

// 2. Aplica o provider Zoneless globalmente para o TestBed
// Isso garante que cada módulo criado via TestBed.configureTestingModule herde isso
beforeEach(() => {
  getTestBed().configureTestingModule({
    providers: [provideZonelessChangeDetection()]
  });
});