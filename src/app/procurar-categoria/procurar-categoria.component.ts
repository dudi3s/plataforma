import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurar-categoria',
  templateUrl: './procurar-categoria.component.html',
  styleUrls: ['./procurar-categoria.component.scss']
})
export class ProcurarCategoriaComponent implements OnInit {

  public termoCategoriaPesquisada = '';
  constructor() { }

  ngOnInit(): void {
  }

  public setarCategoriaPesquisada(termo: string): void {
    this.termoCategoriaPesquisada = termo;
  }
}
