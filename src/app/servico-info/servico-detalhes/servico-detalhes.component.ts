import { Component, Input, OnInit } from '@angular/core';
import { ServicosResponse } from './../../objetos/servicosResponse';

@Component({
  selector: 'app-servico-detalhes',
  templateUrl: './servico-detalhes.component.html',
  styleUrls: ['./servico-detalhes.component.scss']
})
export class ServicoDetalhesComponent implements OnInit {
  @Input() servico: ServicosResponse;

  constructor() { }

  ngOnInit(): void {  }

}
