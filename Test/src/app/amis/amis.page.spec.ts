import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmisPage } from './amis.page';

describe('AmisPage', () => {
  let component: AmisPage;
  let fixture: ComponentFixture<AmisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
