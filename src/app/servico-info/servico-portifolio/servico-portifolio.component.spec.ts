import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPortifolioComponent } from './servico-portifolio.component';

describe('ServicoPortifolioComponent', () => {
  let component: ServicoPortifolioComponent;
  let fixture: ComponentFixture<ServicoPortifolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoPortifolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
