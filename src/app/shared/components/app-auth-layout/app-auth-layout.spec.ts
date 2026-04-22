import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthLayout } from './app-auth-layout';

describe('AppAuthLayout', () => {
  let component: AppAuthLayout;
  let fixture: ComponentFixture<AppAuthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAuthLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(AppAuthLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
