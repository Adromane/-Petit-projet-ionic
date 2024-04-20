import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccuielPage } from './accuiel.page';

describe('AccuielPage', () => {
  let component: AccuielPage;
  let fixture: ComponentFixture<AccuielPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
