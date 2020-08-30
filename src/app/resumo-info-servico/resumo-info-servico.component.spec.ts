import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoInfoServicoComponent } from './resumo-info-servico.component';

describe('ResumoInfoServicoComponent', () => {
  let component: ResumoInfoServicoComponent;
  let fixture: ComponentFixture<ResumoInfoServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoInfoServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoInfoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
