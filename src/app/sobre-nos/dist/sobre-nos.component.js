"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SobreNosComponent = void 0;
var core_1 = require("@angular/core");
var SobreNosComponent = /** @class */ (function () {
    function SobreNosComponent() {
        this.imagemDudi = '../../assets/imagens/sobreNos/dudi.png';
        this.imagemCassio = '../../assets/imagens/sobreNos/cassio.png';
        this.imagemLuh = '../../assets/imagens/sobreNos/luh.png';
    }
    SobreNosComponent.prototype.ngOnInit = function () {
    };
    SobreNosComponent = __decorate([
        core_1.Component({
            selector: 'app-sobre-nos',
            templateUrl: './sobre-nos.component.html',
            styleUrls: ['./sobre-nos.component.scss']
        })
    ], SobreNosComponent);
    return SobreNosComponent;
}());
exports.SobreNosComponent = SobreNosComponent;
