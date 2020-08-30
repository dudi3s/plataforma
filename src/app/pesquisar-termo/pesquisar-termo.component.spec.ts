import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarTermoComponent } from './pesquisar-termo.component';

describe('PesquisarTermoComponent', () => {
  let component: PesquisarTermoComponent;
  let fixture: ComponentFixture<PesquisarTermoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarTermoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarTermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
