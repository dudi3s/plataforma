import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { RequisicoesService } from 'src/servicos/requisicoes.service';
import { ServicosResponse } from '../objetos/servicosResponse';

@Component({
  selector: 'app-comunicacao-negocio',
  templateUrl: './comunicacao-negocio.component.html',
  styleUrls: ['./comunicacao-negocio.component.scss']
})
export class ComunicacaoNegocioComponent implements OnInit {

  public servico: ServicosResponse;
  public inputMensagem: FormControl = new FormControl('');


  public mensagens: Array<{ mensagem: string, dataHora: Date }> = new Array();

  constructor(public servicoRotaAtiva: ActivatedRoute, private servicoRequisicao: RequisicoesService) { }

  ngOnInit(): void {
    this.servicoRotaAtiva.params.subscribe(parametro => {
      this.servicoRequisicao.getServicoDetalhes(parametro.servicoId).subscribe((servicoDetalhes: ServicosResponse) => { this.servico = servicoDetalhes; console.log(this.servico); });
    });
  }

  public adicionarMensagem() {
    if (this.inputMensagem.value != '') {
      this.mensagens.push({ mensagem: this.inputMensagem.value, dataHora: new Date() });
    }
  }
}
