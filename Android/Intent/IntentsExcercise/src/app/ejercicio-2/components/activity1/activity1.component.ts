import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {RouterService} from "~/app/shared/services/router.service";
import {ShareService} from "~/app/shared/services/share.service";
import {EJERCICIO_2_URLs} from "~/app/values/strings";

@Component({
  selector: 'ns-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css'],
  moduleId: module.id,
})
export class Activity1Component implements OnInit {

    constructor(page: Page, private router: RouterService, private sh: ShareService) {
        page.actionBarHidden = true;
    }
    calcular(a: number = 0, b: number = 0, c: number = 0) {
        this.sh.setObject({
            A: a,
            B: b,
            C: c
        });
        this.router.navigate(EJERCICIO_2_URLs.actividad_2);
    }
  ngOnInit() {
  }

}
