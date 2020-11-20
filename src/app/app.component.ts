import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private servicoRouter: Router) { }
  cadastrarServico() {
    this.servicoRouter.navigate(['cadastro_servico']);
  }
}
