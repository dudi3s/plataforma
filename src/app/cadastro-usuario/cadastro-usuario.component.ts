import { Usuario } from './../objetos/usuarioPOJO';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDate, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { RequisicoesService } from 'src/servicos/requisicoes.service';
import { HttpErrorResponse } from '@angular/common/http';

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
      rua: new FormControl(this.usuario.endereco.rua, Validators.required),
      numero: new FormControl(this.usuario.endereco.numero, [Validators.pattern(/(\d)+/), Validators.required]),
      bairro: new FormControl(this.usuario.endereco.bairro, Validators.required),
      cidade: new FormControl(this.usuario.endereco.cidade, Validators.required),
      uf: new FormControl(this.usuario.endereco.uf, Validators.required),
      complemento: new FormControl(this.usuario.endereco.complemento, Validators.required)
    }),
    dataNascimento: new FormControl(this.usuario.dataNascimento, Validators.required),
    foto: new FormControl(this.usuario.foto, Validators.required),
  });

  public generoLista = ['Masculino', 'Feminino', 'Não-Binario', 'Outros'];

  constructor(private req: RequisicoesService) { }

  ngOnInit(): void { }

  public cadastrarUsuario() {

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
      .subscribe(() => {
        alert('Usuário Cadastrado com sucesso!');
      },
        (erro: HttpErrorResponse) => alert('Erro ao cadastrar usuário. Status: (' + erro.status + ')')
      );
  }

  public resetarCadastro() {
    this.cadastroForm.reset();
    this.cadastroForm.get('foto').setValue(this.usuario.foto);
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

  public getValidacaoEndereco(campo: string): string {
    if ((this.cadastroForm.get('endereco').get(campo).invalid) && (this.cadastroForm.get('endereco').get(campo).dirty)) {
      return 'is-invalid';
    } else if (this.cadastroForm.get('endereco').get(campo).valid) {
      return 'is-valid';
    }

    return '';
  }

  public novaImagemSelecionada(event: FileList, pop: NgbPopover) {

    let file = event[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.cadastroForm.get('foto').setValue(reader.result);
      pop.close();
    };
  }
}
