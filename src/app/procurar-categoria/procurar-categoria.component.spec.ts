import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurarCategoriaComponent } from './procurar-categoria.component';

describe('ProcurarCategoriaComponent', () => {
  let component: ProcurarCategoriaComponent;
  let fixture: ComponentFixture<ProcurarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
