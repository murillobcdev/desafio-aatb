import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('Secao3Component', () => {
  let component: Secao3Component;
  let fixture: ComponentFixture<Secao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Secao3Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


