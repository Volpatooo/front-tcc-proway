import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CepParaEndereco } from '../models/cepResultado';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl;

  constructor(private http: HttpClient) { }

  buscaEndereco(cep: string) {
    return this.http.get<CepParaEndereco>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response) => {
        return response;
      })
    )
  }
}
