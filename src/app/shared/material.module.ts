import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule} from '@angular/material';

@NgModule({
    imports: [
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule
    ],
    exports: [
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule
    ],
})
export class MaterialModule { }