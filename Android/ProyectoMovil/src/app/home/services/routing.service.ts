import { Injectable } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private r: RouterExtensions) { }
  goHome(){
      this.r.navigate(['/home']);
  }
  goConsulta() {
      this.r.navigate(['/home/consulta'])
  }
  goAltas() {
      this.r.navigate(['/home/altas'])
  }
}
