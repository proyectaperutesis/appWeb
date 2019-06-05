import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionContentComponent } from './gestion-content/gestion-content.component';
import { GestionarProyectoLeyComponent } from './gestion-content/gestionar-proyecto-ley/gestionar-proyecto-ley.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ProyectoLeyService } from './services/proyecto-ley.service';

@NgModule({
  declarations: [GestionContentComponent, GestionarProyectoLeyComponent],
  imports: [
    CommonModule,
    GestionRoutingModule,
    MaterialModule
  ],
  providers: [
    ProyectoLeyService
  ]
})
export class GestionModule { }
