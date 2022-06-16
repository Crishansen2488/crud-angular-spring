import { CursosService } from './../services/cursos.service';
import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Observable<Curso[]>;
  displayedColumns = ['nome','categoria'];

  constructor(private CursosService: CursosService) {
    this.cursos = this.CursosService.list();
  }

  ngOnInit(): void {

  }

}
