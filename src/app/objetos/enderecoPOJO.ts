export class Endereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string;
  constructor() {
    this.rua = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
    this.complemento = '';
  }
}
