import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MaterialModule } from '../shared/material.module';
import { ModulesModule } from '../modules/modules.module';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule,
    ModulesModule
  ]
})
export class PrincipalModule { }
