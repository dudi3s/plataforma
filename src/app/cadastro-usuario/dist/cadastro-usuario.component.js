"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastroUsuarioComponent = void 0;
var usuarioPOJO_1 = require("./../objetos/usuarioPOJO");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CadastroUsuarioComponent = /** @class */ (function () {
    function CadastroUsuarioComponent(req) {
        this.req = req;
        this.usuario = new usuarioPOJO_1.Usuario();
        this.cadastroForm = new forms_1.FormGroup({
            nome: new forms_1.FormControl(this.usuario.nome, forms_1.Validators.required),
            apelido: new forms_1.FormControl(this.usuario.apelido, forms_1.Validators.required),
            documento: new forms_1.FormControl(this.usuario.documento, [forms_1.Validators.required, forms_1.Validators.pattern(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/)]),
            email: new forms_1.FormControl(this.usuario.email, [forms_1.Validators.required, forms_1.Validators.email]),
            sexo: new forms_1.FormControl(this.usuario.sexo, forms_1.Validators.required),
            endereco: new forms_1.FormGroup({
                rua: new forms_1.FormControl(this.usuario.endereco.rua, forms_1.Validators.required),
                numero: new forms_1.FormControl(this.usuario.endereco.numero, [forms_1.Validators.pattern(/(\d)+/), forms_1.Validators.required]),
                bairro: new forms_1.FormControl(this.usuario.endereco.bairro, forms_1.Validators.required),
                cidade: new forms_1.FormControl(this.usuario.endereco.cidade, forms_1.Validators.required),
                uf: new forms_1.FormControl(this.usuario.endereco.uf, forms_1.Validators.required),
                complemento: new forms_1.FormControl(this.usuario.endereco.complemento, forms_1.Validators.required)
            }),
            dataNascimento: new forms_1.FormControl(this.usuario.dataNascimento, forms_1.Validators.required),
            foto: new forms_1.FormControl(this.usuario.foto, forms_1.Validators.required)
        });
        this.generoLista = ['Masculino', 'Feminino', 'Não-Binario', 'Outros'];
    }
    CadastroUsuarioComponent.prototype.ngOnInit = function () { };
    CadastroUsuarioComponent.prototype.cadastrarUsuario = function () {
        if (!this.cadastroForm.valid) {
            alert('Todos os Campos são Obrigtórios!');
            return;
        }
        this.usuario.nome = this.cadastroForm.get('nome').value;
        this.usuario.apelido = this.cadastroForm.get('apelido').value;
        this.usuario.documento = this.cadastroForm.get('documento').value;
        this.usuario.email = this.cadastroForm.get('email').value;
        this.usuario.sexo = this.cadastroForm.get('sexo').value;
        this.usuario.foto = this.cadastroForm.get('foto').value;
        this.usuario.dataNascimento = this.cadastroForm.get('dataNascimento').value;
        this.usuario.endereco.rua = this.cadastroForm.get('endereco').get('rua').value;
        this.usuario.endereco.numero = this.cadastroForm.get('endereco').get('numero').value;
        this.usuario.endereco.uf = this.cadastroForm.get('endereco').get('uf').value;
        this.usuario.endereco.cidade = this.cadastroForm.get('endereco').get('cidade').value;
        this.usuario.endereco.bairro = this.cadastroForm.get('endereco').get('bairro').value;
        this.usuario.endereco.complemento = this.cadastroForm.get('endereco').get('complemento').value;
        this.req.cadastrarUsuario(this.usuario)
            .subscribe(function () {
            alert('Usuário Cadastrado com sucesso!');
        }, function (erro) { return alert('Erro ao cadastrar usuário. Status: (' + erro.status + ')'); });
    };
    CadastroUsuarioComponent.prototype.resetarCadastro = function () {
        this.cadastroForm.reset();
        this.cadastroForm.get('foto').setValue(this.usuario.foto);
    };
    CadastroUsuarioComponent.prototype.dataNascimentoSelecionada = function (data) {
        this.cadastroForm.get('dataNascimento').setValue(data.year + '-' + data.month + '-' + data.day);
        this.usuario.dataNascimento = data.year + '-' + data.month + '-' + data.day;
    };
    CadastroUsuarioComponent.prototype.getValidacao = function (campo) {
        if ((this.cadastroForm.get(campo).invalid) && this.cadastroForm.get(campo).dirty) {
            return 'is-invalid';
        }
        else if (this.cadastroForm.get(campo).valid) {
            return 'is-valid';
        }
        return '';
    };
    CadastroUsuarioComponent.prototype.getValidacaoEndereco = function (campo) {
        if ((this.cadastroForm.get('endereco').get(campo).invalid) && (this.cadastroForm.get('endereco').get(campo).dirty)) {
            return 'is-invalid';
        }
        else if (this.cadastroForm.get('endereco').get(campo).valid) {
            return 'is-valid';
        }
        return '';
    };
    CadastroUsuarioComponent.prototype.novaImagemSelecionada = function (event, pop) {
        var _this = this;
        var file = event[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.cadastroForm.get('foto').setValue(reader.result);
            pop.close();
        };
    };
    CadastroUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastro-usuario',
            templateUrl: './cadastro-usuario.component.html',
            styleUrls: ['./cadastro-usuario.component.scss']
        })
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}());
exports.CadastroUsuarioComponent = CadastroUsuarioComponent;
