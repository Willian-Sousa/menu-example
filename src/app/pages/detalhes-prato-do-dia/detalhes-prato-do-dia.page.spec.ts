import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesPratoDoDiaPage } from './detalhes-prato-do-dia.page';

describe('DetalhesPratoDoDiaPage', () => {
  let component: DetalhesPratoDoDiaPage;
  let fixture: ComponentFixture<DetalhesPratoDoDiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPratoDoDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
