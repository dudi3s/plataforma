import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent implements OnInit {

  constructor() { }

  public imagemDudi = '../../assets/imagens/sobreNos/dudi.png';
  public imagemCassio = '../../assets/imagens/sobreNos/cassio.png';
  public imagemLuh = '../../assets/imagens/sobreNos/luh.png';

  ngOnInit(): void {
  }

}
