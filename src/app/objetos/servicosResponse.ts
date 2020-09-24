export interface ServicosResponse {
  id: number;
  nome: string;
  rating: number;
  subcategoria: Array<string>;
  preco: number;
  catgoria: number;
  num_contratos: number;
  num_reviews: number;
  endereco: string;
  descricao: string;
}
