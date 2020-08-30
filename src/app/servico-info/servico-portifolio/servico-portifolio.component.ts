import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-portifolio',
  templateUrl: './servico-portifolio.component.html',
  styleUrls: ['./servico-portifolio.component.scss']
})
export class ServicoPortifolioComponent implements OnInit {
  images = 'https://dummyimage.com/300/000/fff&text=Portifolio';
  constructor() { }

  ngOnInit(): void {
  }

}
