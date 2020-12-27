"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastroServicoComponent = void 0;
var core_1 = require("@angular/core");
var CadastroServicoComponent = /** @class */ (function () {
    function CadastroServicoComponent() {
        this.categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'];
        this.subcategoris = ['SubCategoria A', 'SubCategoria B', 'SubCategoria C', 'SubCategoria D', 'SubCategoria E', 'SubCategoria F', 'SubCategoria G', 'SubCategoria H', 'SubCategoria I', 'SubCategoria J', 'SubCategoria K'];
        this.fotosServico = ['Foto 1', 'Foto 2', 'Foto 3', 'Foto 4'];
    }
    CadastroServicoComponent.prototype.ngOnInit = function () {
    };
    CadastroServicoComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastro-servico',
            templateUrl: './cadastro-servico.component.html',
            styleUrls: ['./cadastro-servico.component.scss']
        })
    ], CadastroServicoComponent);
    return CadastroServicoComponent;
}());
exports.CadastroServicoComponent = CadastroServicoComponent;
