import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "ejemplo_1", loadChildren: "~/app/ejemplo-1/ejemplo-1.module#Ejemplo1Module" },
    { path: "ejercicio_1", loadChildren: "~/app/ejercicio-1/ejercicio-1.module#Ejercicio1Module" },
    { path: "ejercicio_2", loadChildren: "~/app/ejercicio-2/ejercicio-2.module#Ejercicio2Module" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
