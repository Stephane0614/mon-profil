import { Component } from '@angular/core';
import { PhoneInfo } from './MethodeInfo';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements ViewWillEnter {


  name: string = 'Axel Faux-ley';
  subtitle: string = 'Flic de stRomain hills';
  phoneInfo: any;
  battInfo: any;
  userPhoto: string = '/assets/img/axelFoley.webp'

  constructor() {}
  ionViewWillEnter(): void {

    const battInfo = new PhoneInfo();
    battInfo.logBatteryInfo().then((info) => {
      this.battInfo = info.batteryLevel;
      console.log(`${this.battInfo}`);
    });

    const phoneInfo = new PhoneInfo();
    phoneInfo.logDeviceInfo().then((info) => {
      this.phoneInfo = info.model;
    });
  }

 
}
