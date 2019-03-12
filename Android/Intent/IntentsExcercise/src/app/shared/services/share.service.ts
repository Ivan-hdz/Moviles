import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
    private actualObj: any;
    constructor() { }
    setObject(obj: any) {
    this.actualObj = obj;
    }
    getObject() {
    return this.actualObj;
}
}
