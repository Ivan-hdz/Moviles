import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource } from 'tns-core-modules/image-source';
import {CameraPlus} from "@nstudio/nativescript-camera-plus";
import {registerElement} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";
import {forEach} from "@angular/router/src/utils/collection";
registerElement("CameraPlus", () => <any>CameraPlus);


@Component({
    selector: 'ns-home',
    moduleId: module.id,
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
    private cam: CameraPlus;
    public imageSource: ImageSource;

    constructor(private zone: NgZone, private page: Page) {
        this.page.actionBarHidden = true
    }

    ngOnInit(): void {}

    ngOnDestroy() {}

    public camLoaded(e: any): void {
        console.log('***** cam loaded *****');
        this.cam = e.object as CameraPlus;

        let flashMode = this.cam.getFlashMode();

        // Turn flash on at startup
        if (flashMode == 'on') {
            this.cam.toggleFlash();
        }

        // TEST THE ICONS SHOWING/HIDING
        // this.cameraPlus.showCaptureIcon = true;
        // this.cameraPlus.showFlashIcon = true;
        // this.cameraPlus.showGalleryIcon = false;
        // this.cameraPlus.showToggleIcon = false;
    }

    public imagesSelectedEvent(e: any): void {
        console.log('IMAGES SELECTED EVENT!!!');
        this.loadImage((e.data as ImageAsset[])[0]);
    }

    public photoCapturedEvent(e: any): void {
        console.log('PHOTO CAPTURED EVENT!!!');
        console.log('-------');
        this.loadImage(e.data as ImageAsset);
    }

    public toggleCameraEvent(e: any): void {
        console.log('camera toggled');
    }

    public recordDemoVideo(): void {
        try {
            console.log(`*** start recording ***`);
            this.cam.record();
        } catch (err) {
            console.log(err);
        }
    }

    public stopRecordingDemoVideo(): void {
        try {
            console.log(`*** stop recording ***`);
            this.cam.stop();
            console.log(`*** after this.cam.stop() ***`);
        } catch (err) {
            console.log(err);
        }
    }

    public toggleFlashOnCam(): void {
        this.cam.toggleFlash();
    }

    public toggleShowingFlashIcon(): void {
        console.log(`showFlashIcon = ${this.cam.showFlashIcon}`);
        this.cam.showFlashIcon = !this.cam.showFlashIcon;
    }

    public toggleTheCamera(): void {
        this.cam.toggleCamera();
    }

    public openCamPlusLibrary(): void {
        this.cam.chooseFromLibrary();
    }

    public takePicFromCam(): void {
        this.cam.takePicture({ saveToGallery: true });
    }

    private loadImage(imageAsset: ImageAsset): void {
        if (imageAsset) {
            this.imageSource = new ImageSource();

            this.imageSource.fromAsset(imageAsset).then(
                imgSrc => {
                    if (imgSrc) {
                        this.zone.run(() => {
                            this.imageSource = imgSrc;
                        });
                    } else {
                        this.imageSource = null;
                        alert('Image source is bad.');
                    }
                },
                err => {
                    this.imageSource = null;
                    console.log('Error getting image source: ');
                    console.error(err);
                    alert('Error getting image source from asset');
                }
            );
        } else {
            console.log('Image Asset was null');
            alert('Image Asset was null');
            this.imageSource = null;
        }
    }


    async takeAll() {
        for(let i = 0; i<30; i++) {
            this.takePicFromCam();
            console.log('Foto ' + i + ' tomada');
            await this.delay(250);
        }
    }
     delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    ngAfterViewInit(): void {
        let flashMode = this.cam.getFlashMode();
        if (flashMode == 'on') {
            this.cam.toggleFlash();
        }
    }

}
