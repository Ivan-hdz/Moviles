import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {RouterService} from "~/app/shared/services/router.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(public router: RouterService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}

