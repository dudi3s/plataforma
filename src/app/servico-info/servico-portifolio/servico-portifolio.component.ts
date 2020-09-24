import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-portifolio',
  templateUrl: './servico-portifolio.component.html',
  styleUrls: ['./servico-portifolio.component.scss']
})
export class ServicoPortifolioComponent implements OnInit {
  images = ['https://dummyimage.com/1920x350/d69846/ffffff&text=+',
    'https://dummyimage.com/1920x350/fc688a/ffffff&text=+++',
    'https://dummyimage.com/1920x350/4b61cc/ffffff&text=+++'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
