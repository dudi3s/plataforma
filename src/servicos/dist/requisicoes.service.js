"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequisicoesService = void 0;
var core_1 = require("@angular/core");
var RequisicoesService = /** @class */ (function () {
    function RequisicoesService(http) {
        this.http = http;
        this.uBase = 'http://localhost:3000/';
    }
    RequisicoesService.prototype.getCategorias = function () {
        return this.http.get(this.uBase + 'categorias');
    };
    RequisicoesService.prototype.getServicos = function (catId) {
        return this.http.get(this.uBase + 'servicos?categoria=' + catId);
    };
    RequisicoesService.prototype.getServicoDetalhes = function (servId) {
        return this.http.get(this.uBase + 'servicos/' + servId);
    };
    RequisicoesService.prototype.getServicoComentarios = function (servId) {
        return this.http.get(this.uBase + 'comentarios?servicoId=' + servId);
    };
    RequisicoesService.prototype.gerarURLCorHexa = function () {
        var value = Math.floor(Math.random() * 16777215).toString(16);
        return 'https://dummyimage.com/250x300/' + value + '/fff&text=+';
    };
    RequisicoesService.prototype.cadastrarUsuario = function (usuario) {
        return this.http.post(this.uBase + 'usuarios', { usuario: usuario });
    };
    RequisicoesService.prototype.cadastrarServico = function (servico) {
        return this.http.post(this.uBase + 'servicos', { servico: servico });
    };
    RequisicoesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RequisicoesService);
    return RequisicoesService;
}());
exports.RequisicoesService = RequisicoesService;
