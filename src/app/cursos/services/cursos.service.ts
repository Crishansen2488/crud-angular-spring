import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs';

import { Curso } from './../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(cursos => console.log(cursos))
    );
  }
}
