import { ServicosResponse } from './../app/objetos/servicosResponse';
import { CategoriasResponse } from './../app/objetos/categoriasResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http: HttpClient) { }

  private uBase = '  http://localhost:3000/';

  public getCategorias(): Observable<Array<CategoriasResponse>> {
    return this.http.get<Array<CategoriasResponse>>(this.uBase + 'categorias');
  }

  public getServicos(catId: number): Observable<Array<ServicosResponse>> {
    return this.http.get<Array<ServicosResponse>>(this.uBase + 'servicos?categoria=' + catId);
  }
}
