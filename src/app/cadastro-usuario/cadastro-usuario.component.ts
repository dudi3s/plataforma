import { Usuario } from './../objetos/usuarioPOJO';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario = new Usuario();

  public cadastroForm = new FormGroup({
    nome: new FormControl(this.usuario.nome, Validators.required),
    apelido: new FormControl(this.usuario.apelido, Validators.required),
    documento: new FormControl(this.usuario.documento, [Validators.required, Validators.pattern(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/)]),
    email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
    sexo: new FormControl(this.usuario.sexo, Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.pattern(/(\d)+/)),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required)
    }),
    dataNascimento: new FormControl(this.usuario.dataNascimento, Validators.required),
    foto: new FormControl(this.usuario.foto, Validators.required),
  });

  public generoLista = ['Masculino', 'Feminino', 'Não-Binario', 'Outros'];

  constructor() { }

  ngOnInit(): void { }

  public cadastrarUsuario() {
    console.log(this.cadastroForm);

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

    this.usuario.endereco.rua = this.cadastroForm.get('endereco').get('rua').value;
    this.usuario.endereco.numero = this.cadastroForm.get('endereco').get('numero').value;
    this.usuario.endereco.uf = this.cadastroForm.get('endereco').get('uf').value;
    this.usuario.endereco.cidade = this.cadastroForm.get('endereco').get('cidade').value;
    this.usuario.endereco.bairro = this.cadastroForm.get('endereco').get('bairro').value;
    this.usuario.endereco.complemento = this.cadastroForm.get('endereco').get('complemento').value;

    console.log(this.usuario);

  }

  public resetarCadastro() {
    this.cadastroForm.reset();
  }

  public dataNascimentoSelecionada(data: NgbDate) {
    this.cadastroForm.get('dataNascimento').setValue(data.year + '-' + data.month + '-' + data.day);
    this.usuario.dataNascimento = data.year + '-' + data.month + '-' + data.day;
  }

  public getValidacao(campo: string): string {
    if ((this.cadastroForm.get(campo).invalid) && this.cadastroForm.get(campo).dirty) {
      return 'is-invalid';
    } else if (this.cadastroForm.get(campo).valid) {
      return 'is-valid';
    }

    return '';
  }
}
