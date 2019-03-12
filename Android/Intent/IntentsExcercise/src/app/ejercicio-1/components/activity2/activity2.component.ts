import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {ShareService} from "~/app/shared/services/share.service";

@Component({
  selector: 'ns-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css'],
  moduleId: module.id,
})
export class Activity2Component implements OnInit {

  constructor(page: Page, public sh: ShareService) {
      page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
