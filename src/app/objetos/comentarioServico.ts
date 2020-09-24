import { Usuario } from './usuarioPOJO';
export class ComentarioServico{
  id: number;
  nota: number;
  servicoId: number;
  usuario: Usuario;
  texto: string;
}
