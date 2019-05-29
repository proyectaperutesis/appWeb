import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionContentComponent } from './gestion-content/gestion-content.component';
import { GestionarProyectoLeyComponent } from './gestion-content/gestionar-proyecto-ley/gestionar-proyecto-ley.component';

const routes: Routes = [
  {
    path: '', component: GestionContentComponent, children: [
      {path: 'gestionar-proyecto-ley', component: GestionarProyectoLeyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
