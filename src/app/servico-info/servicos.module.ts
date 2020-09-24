import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicoComentariosComponent } from './servico-comentarios/servico-comentarios.component';
import { ServicoDetalhesComponent } from './servico-detalhes/servico-detalhes.component';
import { ServicoInfoComponent } from './servico-info.component';
import { ServicoPortifolioComponent } from './servico-portifolio/servico-portifolio.component';



@NgModule({
  declarations: [ServicoComentariosComponent, ServicoPortifolioComponent, ServicoDetalhesComponent, ServicoInfoComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ServicoInfoComponent]
})
export class ServicosModule { }
