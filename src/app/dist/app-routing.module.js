"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var cadastro_usuario_component_1 = require("./cadastro-usuario/cadastro-usuario.component");
var servico_info_component_1 = require("./servico-info/servico-info.component");
var home_component_1 = require("./home/home.component");
var procurar_categoria_component_1 = require("./procurar-categoria/procurar-categoria.component");
var procurar_servico_component_1 = require("./procurar-servico/procurar-servico.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cadastro_servico_component_1 = require("./cadastro-servico/cadastro-servico.component");
var sobre_nos_component_1 = require("./sobre-nos/sobre-nos.component");
var comunicacao_negocio_component_1 = require("./comunicacao-negocio/comunicacao-negocio.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'sobre_nos', component: sobre_nos_component_1.SobreNosComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'cadastro_usuario', component: cadastro_usuario_component_1.CadastroUsuarioComponent },
    { path: 'categorias', component: procurar_categoria_component_1.ProcurarCategoriaComponent },
    { path: 'servicos', component: procurar_servico_component_1.ProcurarServicoComponent },
    { path: 'servicos/categoria/:catId', component: procurar_servico_component_1.ProcurarServicoComponent },
    { path: 'servicos/detalhes/servico/:servicoId', component: servico_info_component_1.ServicoInfoComponent },
    { path: 'servicos/negociacao/:servicoId', component: comunicacao_negocio_component_1.ComunicacaoNegocioComponent },
    { path: 'cadastro_servico', component: cadastro_servico_component_1.CadastroServicoComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
