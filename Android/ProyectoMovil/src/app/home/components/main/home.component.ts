import { Component, OnInit } from "@angular/core";
import {RoutingService} from "~/app/home/services/routing.service";
import {Page} from "tns-core-modules/ui/page";
import {PageProperties} from "~/app/home/utils/PageProperties";
import {UserService} from "~/app/home/services/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent extends PageProperties implements OnInit {

    constructor(public router: RoutingService, p: Page, uServ: UserService) {
        super(p);
        // Use the component constructor to inject providers.
        uServ.siguienteEsModificacion = false;
        uServ.usrOnBufferToModificar = null;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
