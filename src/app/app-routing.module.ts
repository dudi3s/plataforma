import { ServicoInfoComponent } from './servico-info/servico-info.component';
import { HomeComponent } from './home/home.component';
import { ProcurarCategoriaComponent } from './procurar-categoria/procurar-categoria.component';
import { ProcurarServicoComponent } from './procurar-servico/procurar-servico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categorias', component: ProcurarCategoriaComponent },
  { path: 'servicos', component: ProcurarServicoComponent },
  { path: 'servicos/categoria/:catId', component: ProcurarServicoComponent },
  { path: 'servicos/detalhes/servico/:servicoId', component: ServicoInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
