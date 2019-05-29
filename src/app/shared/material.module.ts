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
    MatToolbarModule} from '@angular/material';

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
        MatToolbarModule
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
        MatToolbarModule
    ],
})
export class MaterialModule { }