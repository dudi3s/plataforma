import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ServicoInfoComponent } from './servico-info/servico-info.component';
import { HomeComponent } from './home/home.component';
import { ProcurarCategoriaComponent } from './procurar-categoria/procurar-categoria.component';
import { ProcurarServicoComponent } from './procurar-servico/procurar-servico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ComunicacaoNegocioComponent } from './comunicacao-negocio/comunicacao-negocio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre_nos', component: SobreNosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro_usuario', component: CadastroUsuarioComponent },
  { path: 'categorias', component: ProcurarCategoriaComponent },
  { path: 'servicos', component: ProcurarServicoComponent },
  { path: 'servicos/categoria/:catId', component: ProcurarServicoComponent },
  { path: 'servicos/detalhes/servico/:servicoId', component: ServicoInfoComponent },
  { path: 'servicos/negociacao/:servicoId', component: ComunicacaoNegocioComponent },
  { path: 'cadastro_servico', component: CadastroServicoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
