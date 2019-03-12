import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {RouterService} from "~/app/shared/services/router.service";
import {ShareService} from "~/app/shared/services/share.service";

@NgModule({
    declarations: [],
    imports: [
        NativeScriptCommonModule
    ],
    providers: [RouterService, ShareService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
