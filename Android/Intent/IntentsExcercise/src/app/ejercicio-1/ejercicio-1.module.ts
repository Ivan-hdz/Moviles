import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { Ejercicio1RoutingModule } from './ejercicio-1-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { Activity1Component } from './components/activity1/activity1.component';
import { Activity2Component } from './components/activity2/activity2.component';
import {SharedModule} from "~/app/shared/shared.module";

@NgModule({
  declarations: [Activity1Component, Activity2Component],
  imports: [
    Ejercicio1RoutingModule,
      SharedModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Ejercicio1Module { }
