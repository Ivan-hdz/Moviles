import {AfterViewInit, Component} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngularClient2Intento';
  imgBase64: string;
  constructor(private socket: Socket) {
  }

  ngAfterViewInit(): void {
    this.socket.on('newImage', (data: string) => {
      console.log(data);
    });
  }

}
