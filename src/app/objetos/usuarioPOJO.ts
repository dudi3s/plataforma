import { Endereco } from './enderecoPOJO';

export class Usuario {
  public id: number;
  public nome: string;
  public apelido: string;
  public documento: string;
  public email: string;
  public sexo: string;
  public endereco: Endereco;
  public dataNascimento: string;
  public foto: string;

  public constructor() {
    this.id = Math.floor(Math.random() * (1 - 100 + 1) + 1);
    this.nome = '';
    this.apelido = '';
    this.documento = '';
    this.email = '';
    this.sexo = '';
    this.endereco = null;
    this.dataNascimento = '';
    this.foto = '';
  }
}
