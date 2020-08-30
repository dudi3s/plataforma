import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoInfoComponent } from './servico-info.component';

describe('ServicoInfoComponent', () => {
  let component: ServicoInfoComponent;
  let fixture: ComponentFixture<ServicoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
