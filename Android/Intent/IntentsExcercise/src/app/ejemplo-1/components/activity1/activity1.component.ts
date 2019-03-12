import { Component, OnInit } from '@angular/core';
import {EJEMPLO_1_URLs} from "~/app/values/strings";
import {RouterService} from "~/app/shared/services/router.service";
import {ShareService} from "~/app/shared/services/share.service";
import {Page} from "tns-core-modules/ui/page";

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
  onTap(str: string = '') {
      if(str != '') {
          this.sh.setObject(str);
          this.router.navigate(EJEMPLO_1_URLs.actividad_2);
      }
  }
  ngOnInit() {
  }

}
