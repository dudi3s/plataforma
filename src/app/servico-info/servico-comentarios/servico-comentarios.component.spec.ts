import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoComentariosComponent } from './servico-comentarios.component';

describe('ServicoComentariosComponent', () => {
  let component: ServicoComentariosComponent;
  let fixture: ComponentFixture<ServicoComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
