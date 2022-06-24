import { Component, OnInit } from '@angular/core';

import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',

})
export class AsignaturaComponent implements OnInit {
  asignaturaList: any;

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.listaAsignaturas();
  }

  listaAsignaturas(){
    this.asignaturaService.listaAsignaturas().subscribe((res:any) => {
      this.asignaturaList = res.data;
    }
    )
  
  }
}
