"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListaCategoriasComponent = void 0;
var core_1 = require("@angular/core");
var ListaCategoriasComponent = /** @class */ (function () {
    function ListaCategoriasComponent(servicoRequisicao, servicoRoteamento, servicoChanges) {
        this.servicoRequisicao = servicoRequisicao;
        this.servicoRoteamento = servicoRoteamento;
        this.servicoChanges = servicoChanges;
        this.categorias = new Array();
        this.categoriasCopia = new Array();
    }
    ListaCategoriasComponent.prototype.ngOnInit = function () {
        this.inicializarCategorias();
        console.log(this.servicoRequisicao.gerarURLCorHexa());
    };
    ListaCategoriasComponent.prototype.ngOnChanges = function () {
        if (this.termoCategoria != '') {
            this.filtrarCategorias(this.termoCategoria);
        }
        else {
            this.categorias = this.categoriasCopia;
        }
    };
    ListaCategoriasComponent.prototype.inicializarCategorias = function () {
        var _this = this;
        this.servicoRequisicao.getCategorias().subscribe(function (cats) {
            _this.categorias = cats;
            _this.categoriasCopia = JSON.parse(JSON.stringify(cats));
        });
    };
    ListaCategoriasComponent.prototype.navegarServicosCategoria = function (categoriaId) {
        this.servicoRoteamento.navigate(['servicos/categoria/', categoriaId]);
    };
    ListaCategoriasComponent.prototype.filtrarCategorias = function (nomeCategoria) {
        this.categorias = this.categoriasCopia.filter(function (cat) { return cat.nome.toLocaleLowerCase().includes(nomeCategoria.toLocaleLowerCase()); });
    };
    ListaCategoriasComponent.prototype.getURLColor = function () {
        return this.servicoRequisicao.gerarURLCorHexa();
    };
    __decorate([
        core_1.Input()
    ], ListaCategoriasComponent.prototype, "termoCategoria");
    ListaCategoriasComponent = __decorate([
        core_1.Component({
            selector: 'app-lista-categorias',
            templateUrl: './lista-categorias.component.html',
            styleUrls: ['./lista-categorias.component.scss']
        })
    ], ListaCategoriasComponent);
    return ListaCategoriasComponent;
}());
exports.ListaCategoriasComponent = ListaCategoriasComponent;
