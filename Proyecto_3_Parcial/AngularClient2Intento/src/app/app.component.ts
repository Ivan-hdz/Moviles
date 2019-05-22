import {AfterViewInit, Component} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularClient2Intento';
  imgBase64: string;
  constructor(private socket: Socket) {
    this.imgBase64 = '';
  }

  ngAfterViewInit(): void {
    this.socket.on('newImage', (data) => {
      console.log(data);
      this.imgBase64 = this.arrayBufferToBase64(data);
      console.log(this.imgBase64);
    });
  }

  arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return atob(btoa(binary));
  }

}
