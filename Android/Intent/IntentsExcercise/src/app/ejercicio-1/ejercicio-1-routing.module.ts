import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import {Activity1Component} from "~/app/ejercicio-1/components/activity1/activity1.component";
import {Activity2Component} from "~/app/ejercicio-1/components/activity2/activity2.component";

const routes: Routes = [
    {path: 'actividad_1', component: Activity1Component},
    {path: 'actividad_2', component: Activity2Component}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class Ejercicio1RoutingModule { }
