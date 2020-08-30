import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServicosResponse } from './../objetos/servicosResponse';

@Component({
  selector: 'app-resumo-info-servico',
  templateUrl: './resumo-info-servico.component.html',
  styleUrls: ['./resumo-info-servico.component.scss']
})
export class ResumoInfoServicoComponent {
  @Input() servico: ServicosResponse;

  constructor(private router: Router) { }

  public navegarServicosDetalhes(servico: ServicosResponse): void {
    this.router.navigate(['servicos/detalhes/servico/', servico.id]);
  }

}
