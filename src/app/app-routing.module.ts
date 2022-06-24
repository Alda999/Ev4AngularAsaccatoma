import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CrearComponent } from './asignatura/crear/crear.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'asignatura',
    component:AsignaturaComponent
  },
  {
    path:'asignatura/form',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
