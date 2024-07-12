import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratosEnPage } from './pratos-en.page';

describe('PratosEnPage', () => {
  let component: PratosEnPage;
  let fixture: ComponentFixture<PratosEnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosEnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
