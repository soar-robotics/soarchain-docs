---
sidebar_position: 2
---

# iOS - Motus mini Setup Guide

Motus mini setup guide for iOS phones.

<details>
  <summary>I am using an Andorid based phone.</summary>
  <div>

>  ​[Android Setup Guide](/docs/installation-guide/android-motus-mini-setup.md)

  </div>
</details>


## Before Starting
Ensure you have your Motus mini and its box handy in your car before beginning the setup. Familiarize yourself with all the steps first for a smoother setup experience.

Things you need for the Motus mini Setup:

- Phone
- Motus mini 
- Motus mini box and lid
- Your car

> ❗ Be careful not to lose your Motus Mini box and its lid, as they may be required for any future registration processes.

<details>
  <summary>I lost my QR code sticker</summary>
  <div>

> Please create a [support ticket](#discord) on the Soarchain Discord server and request the digital print of your sticker.

> The steps to create a support ticket is explained on the following section titled **Ticketing and Customer Support**.

  </div>
</details>


#### Disclaimer 

This MOTUS Mini device is a prototype and has not yet received official CE (Conformité Européenne) or FCC (Federal Communications Commission) certifications. By using this device, you acknowledge and agree to the following terms and conditions in ​[Motus mini Disclaimer](https://www.soarchain.com/motus-mini-disclaimer).

### Ticketing and Customer Support

#### Discord

Should you encounter any issues during the setup process or while using the device, please submit a support ticket through ​**Soarchain Discord support ticket channel**. Soarchain team will provide assistance to help resolve any problems that may arise.

1. Join our [Soarchain Discord](https://discord.gg/r43PyGyCst) server. 
2. Create a ticket in the [Soarchain Discord support ticket channel](https://discord.gg/dsbnhMVV78). Soarchain team members will provide assistance to help resolve any problems that may arise.

## iOS - Motus mini Setup

### Pre-Setup Configuration

- Ensure your mobile phone is using your SIM card's cellular network.
- Activate **Cellular Data**, **Bluetooth**, **Personal Hotspot**, and **Maximize Compatibility** on your phone.
- Disconnect from other hotspots or Bluetooth devices during setup.


| Cellular | Hotspot | Bluetooth |
|------|-----|-------|
| ![decrease](/img/cellular_settings_on.png) | ![decrease](/img/hotspot.png) | ![decrease](/img/ble_settings_on.png) |





### Wallet Creation in Motus Connect & Drive

Download the [Motus Connect & Drive app](https://apps.apple.com/tr/app/motus-connect-drive/id6446178680) and create a wallet.
>If you have previously created your wallet, ensure you are signed in with it, or import your wallet by re-entering your 24-word passphrase.

[Apple App Store Link](https://apps.apple.com/tr/app/motus-connect-drive/id6446178680)

<p align="center">
----- ❗❗❗ ATTENTION ❗❗❗ -----
</p>

- You will be provided with **24 seed words** which will serve as your **wallet password key**. It is very crucial that you **correctly and securely write down these 24 words**. 

- It is essential that you **record these 24 seed words in a secure location** and ensure they are not lost. **Under no circumstances should you share these 24 seed words with anyone, including the Soarchain team.**

- If you **lose these 24 words**, you will be **unable to access your account or your Motus Mini forever.**

- **Soarchain team has no access to your wallet and will not recover these words!**


>The wallet you create from the Motus Connect & Drive app is your unique Soarchain wallet.
>Please do not import any other crypto wallet you have to the app. 
>Do not import any other Cosmos based wallet on the Motus Connect & Drive app.


|  |  |  |
|------|-----| ----- |
|![decrease](/img/create_acc.png) | ![decrease](/img/24-1.png) | ![decrease](/img/24-2.png) |

> After writing down the 24 seed words, you will reenter them on the app inorder to access to your account. 

### Plug your Motus mini to your car 

Plug your Motus mini to your vehicle’s generic OBD2 port. The OBD2 port is generally found under the steering wheel on the left side of the driver seat. 

A **red** LED light indicates the device is powered on when it is ready for the next steps.




<details>
  <summary>Can't find my OBD2 port</summary>
  <div>

> The OBD2 port in your vehicle is typically found under the steering wheel. In certain vehicles, you may need to open an additional compartment to access the OBD2 port. For accurate information about the port location, please consult your service provider or the vehicle's manufacturer.

  </div>
</details>

<details>
  <summary>No red light on Motus mini</summary>
  <div>

> The red LED light indicates that the Motus is powered on. If the red LED light is not visible, try unplugging and replugging the device. 

> If the light still doesn't appear, test the device on another vehicle if possible. Should you suspect a power issue with the device, please contact us by opening a customer support ticket on the Soarchain Discord server.

  </div>
</details>


### Registration - Install the Provisioning App

- After you have created or imported your wallet, from the ```Dashboard``` section of the **Motus Connect & Drive** mobile app select **```Register a Motus Device```** button and follow the steps prompted on the app. 

- At a certain stage, you will be prompted to **provision** your Motus mini with your mobile phone. Provisioning involves setting up the Motus mini to connect to your phone's hotspot network, allowing it internet access. 

- This provisioning process needs to be done only once, unless you change your phone or modify your hotspot credentials in the future.

- While following the registration steps, the app will request you to download the  **Motus Secure Provisioning** app from the app store. Press **```Download```** to download the provisioning app from App Store. 

<details>
  <summary>Watch the walkthrough video for provisioning</summary>
  <div>

> [Walkthrough video of provisioning for IOS phones](https://www.youtube.com/watch?v=LzcgMsHemZ0)


  </div>
</details>

<details>
  <summary>I can't download the Motus Secure Provisioning App</summary>
  <div>

> App Store link to the [Motus Secure Provisioning](https://apps.apple.com/tr/app/motus-secure-provisioning/id6446476168) app.


  </div>
</details>




### Registration - Provision your Motus mini

Provisioning is a crucial step that links your Motus Mini device to your phone's hotspot network. The Motus Mini requires an internet connection to operate, which is supplied via your phone's hotspot network. 

Before continuing with the next step, please make sure that your **Cellular Data** and **Personal Hotspot** settings are on. 

1️⃣. Open the **Motus Secure Provisioning** app after downloading it.

2️⃣. Read the instructions carefully in the app before starting the provisioning process.

<details>
  <summary>I have already provisioned the device before</summary>
  <div>

> If you have provisioned the device before, you need to make sure that the hotspot is connected to your vehicle.

To confirm a successful hotspot connection with your Motus device, ensure it is linked to your phone's hotspot. 

While the Motus mini is plugged to your vehicle and from your phone navigate to ```Settings > Personal Hotspot ```  and enable the hotspot settings.

A green icon at the top left of your phone's screen signifies a successful connection. Additionally, for precise results during the tests, verify that no other devices are connected to your hotspot.

|  |  |  |
|------|-----| ----- |
|![ios_connection](/img/hotspot_indicator1.jpeg)  | ![ios_connection](/img/hotspot_indicator3.jpeg) | ![ios_connection](/img/hotspot_indicator2.jpg) |


> If you ddon't see any connection you need to do a provisioning reset and start the provisioning steps from the beginning and enter the correct password. 

> To do a provisioning reset, while the device is connected to your car, press and hold the button on the device for 6 seconds.

> Disconnect and then reconnect the Motus Mini to your car. Close the **Motus Secure Provisioning** app, reopen it, and start again from the QR code scanning step.


  </div>
</details>

3️⃣. Retrieve your Motus mini box and locate the QR code sticker inside the top lid.

<details>
  <summary>Where is the QR code sticker?</summary>
  <div>

> The provisioning QR code sticker is located on the top lid of the Motus mini box.

> Please keep the box safe as it may be needed for any future provisioning actions.

<p align="center">

![decrease](/img/IMG_0472.jpg)


</p>


  </div>
</details>

4️⃣. From the Provisioning App, scan the QR code inside the box.

<details>
  <summary>QR code scanning steps</summary>
  <div>


|  |  |  |
|------|-----| ----- |
|![decrease](/img/IMG_0472.jpg) | ![decrease](/img/IMG_0283.png) | ![decrease](/img/IMG_0284.png) |

  </div>
</details>


<details>
  <summary>I can't scan the QR code.</summary>
  <div>

Ensure the QR code is clearly visible and properly aligned with your camera.

If you encounter any errors, verify that your Bluetooth is active and that no other devices are connected to your Bluetooth or Personal Hotspot.

Another potential cause of scanning errors could be that the Motus mini is already provisioned to your phone. Please check if the device has been previously provisioned.

  </div>
</details>


5️⃣. Scanning the QR code will take you to a ```Select Wi-Fi Network``` screen listing nearby Wi-Fi networks.

6️⃣. Select your **phone’s personal hotspot name** from the available network names listed on the app.

- The phone’s hotspot name is the same as the iPhone’s name visible under ```Settings > Apple ID```.

- If you don’t see your phone’s name on the screen, press the refresh icon on the top right.

<details>
  <summary>I still don't see my phone's hotspot name on the Wi-Fi list.</summary>
  <div>

> If you still don’t see your iPhone’s name on the list please toggle back to the ```Settings > Personal Hotspot``` screen, then disable and enable the hotspot and quickly come back to the ***Motus Secure Provisioning***  app again. 

Refresh the screen from the icon on the top right corner. Now you will be able to see your iPhone on the list. This is a common issue observed while using the iPhone's hotspot feature and related to Apple.

<p align="center">

![decrease](/img/hotspot1.png)


</p>

Please refer to this video if you don't see your phone's name on the available Wi-Fi networks list:

[Walkthrough video of provisioning for IOS phones](https://www.youtube.com/watch?v=LzcgMsHemZ0)


  </div>
</details>





7️⃣. Enter your hotspot password.


- Double-check your phone’s hotspot password before entry. Incorrect entries require a provisioning reset. Ensure correct entry on the first attempt in the **Motus Secure Provisioning app**.

- The phone’s hotspot name is written under ```Settings > Personal Hotspot```.


8️⃣. After correctly entering the password, a success message will confirm completion.


<details>
  <summary>I entered the incorrect password and clicked 'OK'.</summary>
  <div>

> You need to do a provisioning reset to start the provisioning steps from the beginning and enter the correct password. 

> To do a provisioning reset, while the device is connected to your car, press and hold the button on the device for 6 seconds.

> Disconnect and then reconnect the Motus Mini to your car. Close the **Motus Secure Provisioning** app, reopen it, and resume from the QR code scanning step.

> If your Motus mini doesn't have a button on it please go to the  ​[provisioning reset](installation-guide/motus-mini-troubleshooting.md#provisioning-reset) page.

  </div>
</details>

<details>
  <summary>I see an Error message after entering the hotspot password correctly.</summary>
  <div>

> If you see a message saying ```Provisioning Failed```, ```Device Disconnected``` or ```You need to reset the device``` , please check if there is a device connected to your phone’s hotspot. If yes, then the provisioning is completed successfully. 

> If not, you need to do  a provisioning reset.

> To do a provisioning reset, while the device is connected to your car, press and hold the button on the device for 6 seconds.

> Disconnect and then reconnect the Motus Mini to your car. Close the **Motus Secure Provisioning** app, reopen it, and resume from the QR code scanning step.

> If your Motus mini doesn't have a button on it please go to the  ​[provisioning reset](/installation-guide/motus-mini-troubleshooting.md#provisioning-reset) page.

  </div>
</details>


9️⃣. Validate the Hotspot connection

To confirm a successful hotspot connection with your Motus device, ensure it is linked to your phone's hotspot. 

<details>
  <summary>How to validate the connection?</summary>
  <div>

A green icon at the top left of your phone's screen signifies a successful connection. Additionally, for precise results during the tests, verify that no other devices are connected to your hotspot.

|  |  |  |
|------|-----| ----- |
|![ios_connection](/img/hotspot_indicator1.jpeg)  | ![ios_connection](/img/hotspot_indicator3.jpeg) | ![ios_connection](/img/hotspot_indicator2.jpg) |
  </div>
</details>

<details>
  <summary>I don't see a connected device on my phone's hotspot?</summary>
  <div>

> While your device is connected to your car, navigate to ```Settings > Personal Hotspot``` on your phone and wait a few seconds for the Motus mini to rediscover the hotspot network. If unsuccessful, please proceed with the following steps.

> You need to do a provisioning reset to start the provisioning steps from the beginning and enter the correct password. 

> To do a provisioning reset, while the device is connected to your car, press and hold the button on the device for 6 seconds.

> Disconnect and then reconnect the Motus Mini to your car. Close the **Motus Secure Provisioning** app, reopen it, and resume from the QR code scanning step.

> If your Motus mini doesn't have a button on it please go to the  ​[provisioning reset](installation-guide/motus-mini-troubleshooting.md#provisioning-reset) page.

  </div>
</details>

🔟. Once done, close the **Motus Secure Provisioning** app and return to the **Motus Connect & Drive** app. This completes the provisioning process.


### Registration - Final checks

After successfully completing the provisioning process close the ***Motus Secure Provisioning*** app and come back to the ***Motus Connect & Drive*** app, press the ```Already Provisioned``` button.

On the ```Registration Checks``` screen, wait for the final checks to be done of your device.  Then, wait for the ```Register Device``` button to turn blue and then press it to complete the registration.

<details>
  <summary>Issue on "Verifying balance"</summary>
  <div>

The average gas fee required for the registration transaction is approximately 0.01 tMOTUS. To successfully complete this check, your balance must exceed 0.01 tMOTUS.

If your balance is less than 0.01 tMOTUS, or if you encounter an error during this check, please create a [support ticket](#discord) on the Soarchain Discord server for assistance.

  </div>
</details>

<details>
  <summary>Issue on "Checking Motus Device Connection"</summary>
  <div>

This check is necessary to confirm the connection between your phone and the Motus Mini. If you encounter an error, please ensure that you have provisioned your Motus Mini and that the device is connected to your phone's hotspot network.

Alternatively, you can unplug and replug the Motus Mini into your car, restart the Motus Connect & Drive app, verify the hotspot connection, and then try again.

  </div>
</details>


<details>
  <summary>Issue on "Validating Motus Device Pubkey"</summary>
  <div>

This process verifies that your Motus Mini has a valid public key and is not linked to a different wallet.

- Should the public key be absent or not retrievable from the Motus Mini, it means your device cannot validate the Motus Device. In this case, the public key is either unavailable or not defined. To resolve this, please wait for the current check to complete, or restart the process. You can do this by unplugging and replugging the Motus Mini into your vehicle, restarting the Motus Connect & Drive app, ensuring the hotspot connection is active, and then attempting the procedure once more.

- In the event the public key is already associated with a different wallet, it indicates that your Motus device is pre-registered with another wallet. To utilize this device, you need to first import the wallet that's currently registered. After importing, you can either continue using the Motus device with the existing wallet or unregister it to link it with a new wallet.

If the issue still persists, please create a [support ticket](#discord) on the Soarchain Discord server for assistance.

  </div>
</details>


### Earning Rewards

Upon successful registration of your device, you will unlock the complete set of features offered by the Motus Connect & Drive app, and you'll begin to accumulate tMOTUS tokens. It's crucial to note the following:

To earn rewards, you must:

- The Motus mini should be plugged to your vehicle while driving.
- Make sure the your phone's personal hotspot is enabled and the connection between Motus mini and your phone is linked while using the app.
- Ensure that the Motus Connect & Drive app is always running while you are driving. (The app also functions in the background, but it should not be completely closed.)

### Important Notes

#### Never loose your 24-word keyphrase!!!

> ❗ It is essential that you **record these 24 seed words in a secure location** and ensure they are not lost. **Under no circumstances should you share these 24 seed words with anyone, including the Soarchain team!**

> ❗ If you **lose these 24 words**, you will be **unable to access your wallet account or your Motus Mini forever!**

> ❗ **Soarchain team has no access to your wallet and will not recover these words!**


#### Motus mini firmware over-the-air update (OTA) 

When an update is available for the Motus Mini device firmware, the device will automatically initiate the download of the latest firmware version as soon as it connects to the hotspot.

If the Motus Connect & Drive mobile app is open during the firmware installation, you will be able to track the update progress.

> ℹ️  **Do Not Unplug the Device:**
Please keep your Motus Mini connected to your vehicle.

> ℹ️ **Keep the App Open:**
Ensure that the Motus Connect & Drive app remains open during the entire update process.

> ℹ️ **Maintain Internet Connection:**
Do not disable your internet connection during the update.

Please be aware that following the Over-The-Air (OTA) update, the device will automatically reset itself, which may result in a temporary disconnection from the hotspot. It is important to ensure that the hotspot is reconnected before proceeding with any further actions involving the app or the Motus Mini device.


#### Changing your hotspot settings

After the setup process for the Motus mini is finished, it will maintain its connection to your mobile phone using the credentials you provided. However, **if you modify the name or password of your phone's hotspot credentials, the Motus mini will no longer be able to connect to your phone**. 

Therefore, you should avoid changing your hotspot name or password, or alternatively, perform a device reset and repeat the provisioning process from start after you change your credentials. 

To do a provisioning reset, while the device is connected to your car, press and hold the button on the device for 6 seconds. Repeat the Provisioning steps from the **Motus Secure Provisioning** app.

> If your Motus mini doesn't have a button on it please go to the  ​[provisioning reset](installation-guide/motus-mini-troubleshooting.md#provisioning-reset) page.
