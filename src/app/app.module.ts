import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CommonModule } from '@angular/common';
import { AsignaturaService } from './asignatura/asignatura.service';
import { CrearComponent } from './asignatura/crear/crear.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    AsignaturaComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AsignaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
