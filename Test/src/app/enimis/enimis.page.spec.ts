import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnimisPage } from './enimis.page';

describe('EnimisPage', () => {
  let component: EnimisPage;
  let fixture: ComponentFixture<EnimisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnimisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
