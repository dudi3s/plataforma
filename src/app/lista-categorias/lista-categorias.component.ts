import { RequisicoesService } from './../../servicos/requisicoes.service';
import { CategoriasResponse } from './../objetos/categoriasResponse';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit, OnChanges {
  @Input() termoCategoria: string;
  public categorias: Array<CategoriasResponse> = new Array();
  private categoriasCopia: Array<CategoriasResponse> = new Array();

  constructor(private servicoRequisicao: RequisicoesService, private servicoRoteamento: Router, public servicoChanges: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.inicializarCategorias();
    console.log(this.servicoRequisicao.gerarURLCorHexa());

  }

  ngOnChanges(): void {
    if (this.termoCategoria != '') {
      this.filtrarCategorias(this.termoCategoria);
    } else {
      this.categorias = this.categoriasCopia;
    }
  }

  private inicializarCategorias(): void {
    this.servicoRequisicao.getCategorias().subscribe((cats: Array<CategoriasResponse>) => {
      this.categorias = cats;
      this.categoriasCopia = JSON.parse(JSON.stringify(cats));
    });
  }

  public navegarServicosCategoria(categoriaId: number): void {
    this.servicoRoteamento.navigate(['servicos/categoria/', categoriaId]);
  }

  private filtrarCategorias(nomeCategoria: string): void {
    this.categorias = this.categoriasCopia.filter((cat: CategoriasResponse) => cat.nome.toLocaleLowerCase().includes(nomeCategoria.toLocaleLowerCase()));
  }

  public getURLColor(): string {
    return this.servicoRequisicao.gerarURLCorHexa();
  }
}
