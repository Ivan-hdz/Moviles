import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { Ejercicio2RoutingModule } from './ejercicio-2-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { Activity2Component } from './components/activity2/activity2.component';
import { Activity1Component } from './components/activity1/activity1.component';
import {SharedModule} from "~/app/shared/shared.module";

@NgModule({
  declarations: [Activity2Component, Activity1Component],
  imports: [
    Ejercicio2RoutingModule,
      SharedModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Ejercicio2Module { }
