import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurar-servico',
  templateUrl: './procurar-servico.component.html',
  styleUrls: ['./procurar-servico.component.scss']
})
export class ProcurarServicoComponent implements OnInit {
  public termoServicoPesquisado = '';
  constructor() { }

  ngOnInit(): void { }

  public setarServicoPesquisado(termo: string): void {
    this.termoServicoPesquisado = termo;
  }
}
