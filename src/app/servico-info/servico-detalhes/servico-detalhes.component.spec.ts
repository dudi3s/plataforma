import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoDetalhesComponent } from './servico-detalhes.component';

describe('ServicoDetalhesComponent', () => {
  let component: ServicoDetalhesComponent;
  let fixture: ComponentFixture<ServicoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
