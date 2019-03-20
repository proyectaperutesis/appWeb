import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration/app.constants';

@NgModule({
    exports: [
        HttpClientModule
    ],
    providers: [
        Configuration
    ]
})

export class CoreModule { }