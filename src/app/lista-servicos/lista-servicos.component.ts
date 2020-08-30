import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisicoesService } from 'src/servicos/requisicoes.service';
import { ServicosResponse } from '../objetos/servicosResponse';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.scss']
})
export class ListaServicosComponent implements OnInit, OnChanges {
  @Input() termoServico: string;
  public servicos: Array<ServicosResponse> = new Array();
  private servicosCopia: Array<ServicosResponse> = new Array();

  constructor(private routerActive: ActivatedRoute, private req: RequisicoesService) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe((param: { catId: number }) => this.inicializarServicosCategoria(param.catId));
  }

  ngOnChanges(): void {
    if (this.termoServico != '') {
      this.filtrarServicos(this.termoServico);
    } else {
      this.servicos = this.servicosCopia;
    }
  }

  private inicializarServicosCategoria(catId: number): void {
    this.req.getServicos(catId).subscribe((servs: Array<ServicosResponse>) => {
      this.servicos = servs;
      this.servicosCopia = JSON.parse(JSON.stringify(servs));
    });
  }

  private filtrarServicos(nomeServico: string): void {
    this.servicos = this.servicosCopia.filter((serv: ServicosResponse) => serv.nome.toLocaleLowerCase().includes(nomeServico.toLocaleLowerCase()));
  }
}
