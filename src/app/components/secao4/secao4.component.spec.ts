import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao4Component } from './secao4.component';

describe('Secao4Component', () => {
  let component: Secao4Component;
  let fixture: ComponentFixture<Secao4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secao4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
