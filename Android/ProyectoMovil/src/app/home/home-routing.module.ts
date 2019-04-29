import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./components/main/home.component";
import {AltaComponent} from "~/app/home/components/alta/alta.component";
import {ConsultaComponent} from "~/app/home/components/consulta/consulta.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'altas', component: AltaComponent},
    { path: 'consulta', component: ConsultaComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
