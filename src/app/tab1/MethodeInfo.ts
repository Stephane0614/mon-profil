import { Device } from '@capacitor/device';


export class PhoneInfo{

    logDeviceInfo = async () => {
        const info = await Device.getInfo();
        // console.log(info);
        return info;
      };
      
       logBatteryInfo = async () => {
        const battInfo = await Device.getBatteryInfo();
        // console.log(battInfo);
        return battInfo;
      };

}