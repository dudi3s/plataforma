import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoNegocioComponent } from './comunicacao-negocio.component';

describe('ComunicacaoNegocioComponent', () => {
  let component: ComunicacaoNegocioComponent;
  let fixture: ComponentFixture<ComunicacaoNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacaoNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
