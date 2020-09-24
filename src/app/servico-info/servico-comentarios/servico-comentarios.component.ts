import { ComentarioServico } from './../../objetos/comentarioServico';
import { RequisicoesService } from 'src/servicos/requisicoes.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-comentarios',
  templateUrl: './servico-comentarios.component.html',
  styleUrls: ['./servico-comentarios.component.scss']
})
export class ServicoComentariosComponent implements OnInit {
  @Input() servicoId: number;

  public comentarios: Array<ComentarioServico>;

  constructor(private req: RequisicoesService) { }

  ngOnInit(): void {
    this.req.getServicoComentarios(this.servicoId).subscribe((comentariosResponse: Array<ComentarioServico>) => this.comentarios = comentariosResponse);
  }
}
