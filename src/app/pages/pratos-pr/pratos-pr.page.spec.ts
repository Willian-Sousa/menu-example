import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratosPrPage } from './pratos-pr.page';

describe('PratosPrPage', () => {
  let component: PratosPrPage;
  let fixture: ComponentFixture<PratosPrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosPrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
