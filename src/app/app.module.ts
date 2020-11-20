import { ResumoInfoServicoComponent } from './resumo-info-servico/resumo-info-servico.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaServicosComponent } from './lista-servicos/lista-servicos.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PesquisarTermoComponent } from './pesquisar-termo/pesquisar-termo.component';
import { ProcurarCategoriaComponent } from './procurar-categoria/procurar-categoria.component';
import { ProcurarServicoComponent } from './procurar-servico/procurar-servico.component';
import { ServicosModule } from './servico-info/servicos.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ComunicacaoNegocioComponent } from './comunicacao-negocio/comunicacao-negocio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProcurarServicoComponent,
    ListaServicosComponent,
    ListaCategoriasComponent,
    ProcurarCategoriaComponent,
    PesquisarTermoComponent,
    HomeComponent,
    ResumoInfoServicoComponent,
    CadastroUsuarioComponent,
    CadastroServicoComponent,
    SobreNosComponent,
    ComunicacaoNegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
