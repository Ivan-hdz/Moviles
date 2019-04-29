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
    public x1: string;
    public x2: string;
    constructor(page: Page,  sh: ShareService) {
        page.actionBarHidden = true;
        this.calc(sh.getObject().A, sh.getObject().B, sh.getObject().C);
    }
    calc(a: number, b: number, c: number) {
        if(a == 0) {
            this.x1 =( (-c) / b).toString();
            this.x2 = " - ";
        } else if((b*b) - (4*a*c) >= 0) {
            this.x1 = ((-b/(2*a)) + ((Math.sqrt((b*b) - (4*a*c))) / (2*a))).toString();
            this.x2 = ((-b/(2*a)) - ((Math.sqrt((b*b) - (4*a*c))) / (2*a))).toString();
        } else {
            let x_img =  ( ( Math.sqrt(Math.abs((b*b) - (4*a*c) ) ) ) / (2*a)).toString() + 'i';
            this.x1 = (-b/(2*a)).toString() + ' + ' + x_img;
            this.x2 = (-b/(2*a)).toString() + ' - ' + x_img;
        }
    }
  ngOnInit() {
  }

}
