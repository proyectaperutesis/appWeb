import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule } from '@angular/material';

@NgModule({
    imports: [
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule
    ],
})
export class MaterialModule { }