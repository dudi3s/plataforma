"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComunicacaoNegocioComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ComunicacaoNegocioComponent = /** @class */ (function () {
    function ComunicacaoNegocioComponent(servicoRotaAtiva, servicoRequisicao) {
        this.servicoRotaAtiva = servicoRotaAtiva;
        this.servicoRequisicao = servicoRequisicao;
        this.inputMensagem = new forms_1.FormControl('');
        this.mensagens = new Array();
    }
    ComunicacaoNegocioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicoRotaAtiva.params.subscribe(function (parametro) {
            _this.servicoRequisicao.getServicoDetalhes(parametro.servicoId).subscribe(function (servicoDetalhes) { _this.servico = servicoDetalhes; console.log(_this.servico); });
        });
    };
    ComunicacaoNegocioComponent.prototype.adicionarMensagem = function () {
        if (this.inputMensagem.value != '') {
            this.mensagens.push({ mensagem: this.inputMensagem.value, dataHora: new Date() });
        }
    };
    ComunicacaoNegocioComponent = __decorate([
        core_1.Component({
            selector: 'app-comunicacao-negocio',
            templateUrl: './comunicacao-negocio.component.html',
            styleUrls: ['./comunicacao-negocio.component.scss']
        })
    ], ComunicacaoNegocioComponent);
    return ComunicacaoNegocioComponent;
}());
exports.ComunicacaoNegocioComponent = ComunicacaoNegocioComponent;
