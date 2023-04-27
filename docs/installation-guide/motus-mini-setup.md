---
sidebar_position: 1
---

# Motus mini Setup

## Before Starting
Before starting with your Motus mini, it is recommended that you review the entire setup steps first and then commence with your device.

#### Disclaimer 

This MOTUS Mini device is a prototype and has not yet received official CE (Conformité Européenne) or FCC (Federal Communications Commission) certifications. By using this device, you acknowledge and agree to the following terms and conditions in ​[Motus mini Disclaimer](https://www.soarchain.com/motus-mini-disclaimer).

## Ticketing and Customer Support

#### Discord

Should you encounter any issues during the setup process or while using the device, please submit a support ticket through ​[Soarchain Discord support ticket channel](https://discord.gg/dsbnhMVV78) (**[Soarchain Discord](https://discord.gg/r43PyGyCst) > #📩-support-ticket** channel ). The Soarchain team will provide assistance to help resolve any problems that may arise.


## Provisioning Motus mini

To start with your Motus mini, the first step is to provision the Motus mini with your mobile phone. Please download the ***Motus Secure Provisioning*** mobile app from the links below.

- ​[Apple App Store Link](https://apps.apple.com/tr/app/motus-secure-provisioning/id6446476168)
- [Google Play Store Link](https://play.google.com/store/apps/details?id=com.sr.esp)
​ 

Before starting with the provisioning please make sure your mobile phone is connected to your **SIM card’s cellular network**. Then enable the **Cellular Data** , **Bluetooth** and **Personal Hotspot** settings on your phone as seen in the images below.


#### iPhone
| Cellular | Hotspot | Bluetooth |
|------|-----|-------|
| ![decrease](/img/cellular_settings_on.png) | ![decrease](/img/hotspot.png) | ![decrease](/img/ble_settings_on.png) |

#### Android
| Cellular | Hotspot | Bluetooth |
|------|-----|-------|
| ![decrease](/img/Screenshot_20230425_135316_Call_settings.jpg) | ![decrease](/img/Screenshot_20230425_135345_Settings.jpg) | ![decrease](/img/Screenshot_20230425_135253_Settings.jpg) |


### Plug your Motus mini to your car 

Plug your Motus mini to your vehicle’s generic OBD2 port. The OBD2 port is generally found under the steering wheel on the left side of the driver seat. 

After plugging the Motus mini to the vehicle's OBD2 port, the Motus mini will flash a LED light meaning it is connected correctly and ready for the setup. 

### Pairing Motus mini with your mobile phone

Once you complete ste steps above, please open your ***Motus Secure Provisioning***. If prompted, allow your phone’s camera to be used by the app.

From the ***Motus Secure Provisioning*** app, press  **```Provision Device```**  to start the provisioning and then scan the QR code which can be found inside the Motus mini box. 

|  |  |  |
|------|-----| ----- |
|![decrease](/img/IMG_0472.jpg) | ![decrease](/img/IMG_0283.png) | ![decrease](/img/IMG_0284.png) |

### Select your phone's hotspot on the Motus Secure Provisioning App

>
**!! Attention !! --** 
Before continuing with the next step, please make sure that your **Cellular Data** and **Personal Hotspot** settings are on. 

After scanning the QR code you will be prompted to a ```Select Wi-Fi Network``` screen where available Wi-Fi networks near you are listed. To continue seting up your Motus mini, please select your phone’s personal hotspot name from the available network names listed on the app. If you don’t see your phone’s name on the screen, please press refresh icon on the top right.

#### Android 
The phone’s hotspot name is written at ```Settings > Connections > Mobile Hotspot & Tethering > Mobile Hotspot```

#### iPhone
The phone’s hotspot name is the same as the iPhone’s name. You can check your phone’s name from ```Settings > Apple ID```, it is written on the bottom where all of your Apple based devices are listed.  

If you don’t see your phone’s name on the screen, toggle back to the ```Settings > Personal Hotspot``` screen (image below) and quickly come back to the app again and refresh the screen from the icon on the top right corner. This is a common issue observed while using iPhone's hotspot feature. 

<p align="center">

![decrease](/img/hotspot1.png)
</p>


### Entering the hotspot password

<p align="center">
----- ❗❗❗ ATTENTION ❗❗❗ -----
</p>

Before entering your **phone’s hotspot password** please double check your password. You must enter your hotspot correctly on the first try. **If entered incorrectly, the Motus mini needs to be reset using a PC with a Type-C cabled connection.** So make sure that you entered your phone’s personal hotspot password correctly on the ***Motus Secure Provisioning*** app.

You can reset the provisioning by clicking [reset-provisioning](https://reset.soarchain.com/) but please first open a support ticket from the ​[Soarchain Discord support ticket channel](https://discord.gg/dsbnhMVV78) explaining the problem to the Soar team in detail.   

<p align="center">

![decrease](/img/IMG_0292b.png)

----- ❗❗❗ ATTENTION ❗❗❗ -----
</p>

Your phone’s hotspot password is located at:

| iPhone | Android |
|------|----- |
| **Settings** > **Personal Hotspot** | **Settings** > **Connections** > **Mobile Hotspot & Tethering** > **Mobile Hotspot** |
| ![decrease](/img/IMG_0463.png) | ![decrease](/img/Screenshot_20230424_132255.png) | 




After entering the password correctly, the provisioning will be completed. 

>
 If you see a message saying ```Provisioning Failed``` or Red ```X``` sign, please check if there is a device connected to your phone’s hotspot. If yes, then the provisioning is completed successfully. Sometimes when an auto-update is downloading ***Motus Secure Provisioning*** prompts a failure message even though the provisioning is successfully done.  


## Important Notes

### Changing your hotspot settings

After the setup process for the Motus mini is finished, it will maintain its connection to your mobile phone using the credentials you provided. However, **if you modify the name or password of your phone's hotspot credentials, the Motus mini will no longer be able to connect to your phone**. Therefore, you should avoid changing your hotspot name or password, or alternatively, perform a device reset and repeat the provisioning process from start. 

You can reset the provisioning by clicking [reset-provisioning](https://reset.soarchain.com/) but please first open a support ticket from the ​[Soarchain Discord support ticket channel](https://discord.gg/dsbnhMVV78) explaining the problem to the Soar team.   

### Extra Android settings

To improve your experience, you may want to consider following these steps to ensure that your mobile hotspot remains open at all times, thereby eliminating the need to enable it each time you use your car.  

- Go to ```Settings > Connections > Mobile Hotspot & Tethering > Mobile Hotspot > Configure > Advanced ``` 
Click the ```Turn off when no device connected for``` and make it ```Never Timeout```. Also disable the settings below. (The location of this setting can differ between devices.)


### Find out More
<div class="docs-card-container">
  <div class="row row-cols-1 row-cols-md-3a g-3">
    <div class="col">
      <div class="card card-body h-100 d-flex flex-column">
        <a
          href="/category/key-components"
          class="card-title card-link stretched-link"
        >
          <h2>Key Components</h2>
        </a>
        <p class="card-text">Discover the key components of the network.</p>
      </div>
    </div>
    <div class="col">
      <div class="card card-body h-100 d-flex flex-column">
        <a
          href="https://www.soarchain.com/motus-mini"
          class="card-title card-link stretched-link"
        >
          <h2>MOTUS</h2>
        </a>
        <p class="card-text">Secure connectivity hardware of Soarchain.
        </p>
      </div>
    </div>
  </div>
</div>