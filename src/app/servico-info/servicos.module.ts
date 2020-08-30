import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicoInfoComponent } from './servico-info.component';
import { ServicoDetalhesComponent } from './servico-detalhes/servico-detalhes.component';
import { ServicoPortifolioComponent } from './servico-portifolio/servico-portifolio.component';
import { ServicoComentariosComponent } from './servico-comentarios/servico-comentarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ServicoComentariosComponent, ServicoPortifolioComponent, ServicoDetalhesComponent, ServicoInfoComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ServicoInfoComponent]
})
export class ServicosModule { }
