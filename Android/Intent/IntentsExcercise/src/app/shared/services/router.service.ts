import { Injectable } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: RouterExtensions) { }
  public navigate(url: string, cleanHistory: boolean = false) {
      this.router.navigate([url], {clearHistory: cleanHistory});
  }
}
