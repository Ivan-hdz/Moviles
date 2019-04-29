import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/main/home.component";
import { ConsultaComponent } from './components/consulta/consulta.component';
import { AltaComponent } from './components/alta/alta.component';
import {RoutingService} from "~/app/home/services/routing.service";
import {NativeScriptFormsModule} from "nativescript-angular";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ConsultaComponent,
        AltaComponent
    ],
    providers: [RoutingService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
