import { Usuario } from './../objetos/usuarioPOJO';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  private usuario: Usuario = new Usuario();

  public cadastroForm = new FormGroup({
    nome: new FormControl(this.usuario.nome, Validators.required),
    apelido: new FormControl(this.usuario.apelido, Validators.required),
    documento: new FormControl(this.usuario.documento, Validators.required),
    email: new FormControl(this.usuario.email, Validators.required),
    sexo: new FormControl(this.usuario.sexo, Validators.required),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required)
    }),
    dataNascimento: new FormControl(this.usuario.dataNascimento, Validators.required),
    foto: new FormControl(this.usuario.foto, Validators.required),
  });

  constructor() { }

  ngOnInit(): void { }

}
