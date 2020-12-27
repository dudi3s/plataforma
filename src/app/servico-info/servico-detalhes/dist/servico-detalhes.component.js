"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicoDetalhesComponent = void 0;
var core_1 = require("@angular/core");
var ServicoDetalhesComponent = /** @class */ (function () {
    function ServicoDetalhesComponent(servicoRoteamento) {
        this.servicoRoteamento = servicoRoteamento;
    }
    ServicoDetalhesComponent.prototype.ngOnInit = function () { };
    ServicoDetalhesComponent.prototype.abrirChatNegociacao = function () {
        this.servicoRoteamento.navigate(['/servicos/negociacao/' + this.servico.id]);
    };
    __decorate([
        core_1.Input()
    ], ServicoDetalhesComponent.prototype, "servico");
    ServicoDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'app-servico-detalhes',
            templateUrl: './servico-detalhes.component.html',
            styleUrls: ['./servico-detalhes.component.scss']
        })
    ], ServicoDetalhesComponent);
    return ServicoDetalhesComponent;
}());
exports.ServicoDetalhesComponent = ServicoDetalhesComponent;
