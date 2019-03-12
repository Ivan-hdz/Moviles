import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {ShareService} from "~/app/shared/services/share.service";
import {EJERCICIO_1_URLs} from "~/app/values/strings";
import {RouterService} from "~/app/shared/services/router.service";

@Component({
  selector: 'ns-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css'],
  moduleId: module.id,
})
export class Activity1Component implements OnInit {

  constructor(page: Page, private sh: ShareService, private router: RouterService) {
      page.actionBarHidden = true;
  }
    onTap(s1: string = '', s2: string = '') {
      if(s1 != '' && s2 != '') {
          this.sh.setObject({
              nombre: s1,
              apellido: s2
          });
          this.router.navigate(EJERCICIO_1_URLs.actividad_2);
      }
    }
  ngOnInit() {
  }

}
