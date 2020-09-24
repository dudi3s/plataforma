import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequisicoesService } from 'src/servicos/requisicoes.service';
import { ServicosResponse } from './../objetos/servicosResponse';

@Component({
  selector: 'app-servico-info',
  templateUrl: './servico-info.component.html',
  styleUrls: ['./servico-info.component.scss']
})
export class ServicoInfoComponent implements OnInit {
  constructor(private rotaAtiva: ActivatedRoute, private req: RequisicoesService) { }
  public servico: ServicosResponse;


  ngOnInit(): void {
    this.rotaAtiva.params.subscribe(parametro => {
      this.req.getServicoDetalhes(parametro.servicoId).subscribe((servicoDetalhes: ServicosResponse) => this.servico = servicoDetalhes);
    });

  }
}
