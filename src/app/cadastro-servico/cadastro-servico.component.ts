import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.scss']
})
export class CadastroServicoComponent implements OnInit {

  public categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'];
  public subcategoris = ['SubCategoria A', 'SubCategoria B', 'SubCategoria C', 'SubCategoria D', 'SubCategoria E', 'SubCategoria F', 'SubCategoria G', 'SubCategoria H', 'SubCategoria I', 'SubCategoria J', 'SubCategoria K'];
  public fotosServico = ['Foto 1', 'Foto 2', 'Foto 3', 'Foto 4'];
  constructor() { }

  ngOnInit(): void {
  }

}
