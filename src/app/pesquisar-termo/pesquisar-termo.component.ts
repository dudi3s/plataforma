import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pesquisar-termo',
  templateUrl: './pesquisar-termo.component.html',
  styleUrls: ['./pesquisar-termo.component.scss']
})
export class PesquisarTermoComponent implements OnInit {
  @Input() labelInput: string;
  @Output() termoPesquisadoChanged = new EventEmitter<string>();

  public termoPesquisado: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.termoPesquisado.valueChanges.subscribe((inputChanged: string) => this.termoPesquisadoChanged.emit(inputChanged));
  }
}
