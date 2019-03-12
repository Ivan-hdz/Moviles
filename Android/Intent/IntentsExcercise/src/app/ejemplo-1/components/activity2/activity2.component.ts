import { Component, OnInit } from '@angular/core';
import {ShareService} from "~/app/shared/services/share.service";
import {Page} from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css'],
  moduleId: module.id,
})
export class Activity2Component implements OnInit {

  constructor(public sh: ShareService, page: Page) {
      page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
