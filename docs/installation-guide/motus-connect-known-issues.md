---
sidebar_position: 2
---

# Motus mini and Mobile App Known Issues

## Understanding Your Device's LED Output Behavior

Motus mini is equipped with an RGB LED, where the Red Channel is connected to the power supply. This means that the Red LED is always on when the device has power. The device uses different LED patterns to indicate its current state. Here's what each pattern means:

#### 1. App Connection Established

When the device successfully pairs with the Motus Connect & Drive App and a connection between the Motus mini and the mobile phone is confirmed, the LED will remain lit. This status is indicated by a magenta color.

#### 2. Attempting App Re/connection

If the device is attempting to establish or reestablish connection with the app, the LED will flash on for a brief 0.1 second (100 milliseconds), then off for 0.2 second (200 milliseconds). This cycle continues until a connection is made. This status is indicated by a magenta color.

#### 3. Undergoing Software Update

hroughout a software update, the LED showcases a "breathing" effect, smoothly transitioning between the on and off states. The pattern involves the LED illuminating for 500 milliseconds, then dimming for 200 milliseconds, followed by a series of 3 blinks, with the LED alternating between on and off every 200 milliseconds. This cycle persists until the update finishes. This status is indicated by a magenta color.

#### 4. While Provisioning

During the provisioning process, the LED will flash on for 0.5 second (500 milliseconds) and then off for another 0.5 second (500 milliseconds). This cycle will continue until the provisioning completes. This status is indicated by a magenta colo

#### 5. Blink when Data Received from the Motus mini

When the device receives data through a websocket, the LED will blink in a unique pattern. It will blink ON for 0.5 second (500 milliseconds) and OFF for 0.2 second (200 milliseconds). This pattern will repeat three times. This indication is displayed in white color, regardless of the device's current state.

>Note:

>Please note that all LED indications, except for the 'Blink on Websocket Data Received', are displayed in magenta color. The 'Blink on Websocket Data Received' indication is displayed in white color. The Red LED will always be on when the device has power due to its connection to the power supply.

>By understanding these LED patterns, you can easily determine the current state of your device.

## Select your phone's OS

Please click the link based on your phone type. 

[Android Based Devices](#android-mobile-app-issues) 

[IOS Apple](#ios-mobile-app-issues)


## Android Mobile App Issues

### Provisioning - "Device Not Found"

Some quick reasons why the ***Motus Secure Provisioning*** app prompts ```Device not Found``` after you scan the QR code can be: 

 - Qr code scanned was incorrect or unreadable because of its distance to the camera, orientation or lighting. 
 - Motus mini was not plugged into your car or the LED was not on when you scanned the Qr code. 
 - You did not enable the settings written on the docs. (Bluetooth - Cellular Data - Mobile Hotspot) 
 - Your mobile phone’s Bluetooth is connected to another device then the Motus mini when you scan the QR code. 
 - You have already provisioned your device successfully.

Please go to the:
**Settings > Connections > Mobile Hotspot & Tethering > Mobile Hotspot**
(Mobile Hotspot location can differ from phone to phone)
and check whether there is a device called ```Motusmini``` connected to your phone?

 - You entered your phone's hotspot password wrong and you need a provisioning reset. Click [here](#provisioning-reset) to do a provisioning reset. 


### Provisioning - "Fail to Connect After Entering the Hotspot Password"

Some quick reasons why the ***Motus Secure Provisioning*** app prompts ```Fail to Connect``` or keep on waiting for a long time after entering the phone's hotspot password: 

 - The app prompted a failure message even though the connection was successfully completed.

Please go to the:
**Settings > Connections > Mobile Hotspot & Tethering > Mobile Hotspot**
(Mobile Hotspot location can differ from phone to phone)
and check whether there is a device called ```Motusmini``` connected to your phone?

 - You entered your phone's hotspot password wrong and you need a provisioning reset. Click [here](#provisioning-reset) to do a provisioning reset.  








## IOS Mobile App Issues

### Provisioning - "Device Not Found"

Some quick reasons why the ***Motus Secure Provisioning*** app prompts ```Device not Found``` after you scan the QR code can be: 

 - Qr code scanned was incorrect or unreadable because of its distance to the camera, orientation or lighting. 
 - Motus mini was not plugged into your car or the LED was not on when you scanned the Qr code. 
 - You did not enable the settings written on the docs. (Bluetooth - Cellular Data - Mobile Hotspot) 
 - Your mobile phone’s Bluetooth is connected to another device then the Motus mini when you scan the QR code. 
 - You have already provisioned your device successfully.

You would know if the connection is completed successfully by checking the top left part on your iPhone's screen as the image below. The green light on your time display indicates that the Motus mini is connected to your iPhone's hotspot.
>
>![ios_connection](/img/green_connection.png) 

 - You entered your phone's hotspot wrong so you need a reset. Click [here](#provisioning-reset) to do a provisioning reset. 


### Provisioning - "Fail to Connect After Entering the Hotspot Password"

Some quick reasons why the ***Motus Secure Provisioning*** app prompts ```Fail to Connect``` or keep on waiting for a long time after entering the phone's hotspot password: 

 - The app prompted a failure message even though the connection was successfully completed.

You would know if the connection is completed successfully by checking the top left part on your iPhone's screen as the image below. The green light on your time display indicates that the Motus mini is connected to your iPhone's hotspot.
>
>![ios_connection](/img/green_connection.png) 

 - You entered your phone's hotspot password wrong and you need a provisioning reset. Click [here](#provisioning-reset) to do a provisioning reset.  



## Provisioning Reset

If you entered your phone's hotspot password wrong please follow the steps below.

1. Ensure that there are no devices connected to your phone's mobile hotspot by checking from your phone's settings, including the Motus mini. It's possible that the connection may still go through even if the provisioning app prompts a failure. 

2. If there are no devices connected, you will require the following items to reset the Motus mini:

- **A Type C to USB 2.0 cable**
- **A desktop or laptop computer**
- **A Chrome web browser installed on the computer**
- **Your Motus mini**

3. Start by disconnecting any other devices connected to your computer. 

4. Connect your Motus mini to the computer using the Type-C to USB-2.0 cable. If the LED on the Motus mini lights up, it indicates that Motus is ready for the provisioning reset. 

### Windows Based PC

5. Go to **Device Manager > Ports** tab and check if you are seeing the following driver shown in the attached image.

>![port image](/img/com_port.png)

6. If you are not seeing the ```Silicon Labs CP210x USB to UART Bridge```, you might be missing a driver. Windows can install the driver automatically once the cable is plugged in or in the **Device Manager > Ports** tab you can right click on the ```COM device``` and select **Update Driver > "Search automatically for driver"** to let Windows find the most suitable drivers.
 
7. If you are still not seeing the device, please install the drivers manually using the following this [driver link](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip).

7. 1. Using Windows File Explorer, locate the driver folder
   (that you previously unzipped)
7. 2. Right click on the **silabser.inf** file and select **Install**
7. 3.  Follow the instructions

8. Once you are able to see the device as a ```COMx``` where "x" can be any number, you can proceed to the next step to reset the device.

9. Next, open your **Chrome** browser and navigate to this website: https://reset.soarchain.com/. Press ```Connect``` and select the ```CP210x USB to UART Bridge Controller(COMx)```. 

10. Then click on the ```reset``` button on the site and wait for the color to change green again. Also check if the Motus mini changes the LED colors, which indicates that the device has been reset successfully.

11. You can try to provision your Motus mini again.

### Linux Based PC

5. Open up the system terminal and type: 

```
ls /dev/ttyUSB*
```

The output should something like the image below.

>![linux term image](/img/linux_lsdev.png)

6.  Next, open your **Chrome** browser and navigate to this website: https://reset.soarchain.com/. Press ```Connect``` and select the ```CP210x USB to UART Bridge Controller (ttyUSBx)```. 

7. Then click on the ```reset``` button on the site and wait for the color to change green again. Also check if the Motus mini changes the LED colors, which indicates that the device has been reset successfully.

8. You can try to provision your Motus mini again.

### MAC Based PC

5. Open up the system terminal and type: 

```
ls /dev/tty.usbserial*
```

The output should something like the image below.

>![mac term image](/img/mac_lsdev.png)

6.  Next, open your **Chrome** browser and navigate to this website: https://reset.soarchain.com/. Press ```Connect``` and select the ```CP210x USB to UART Bridge Controller (tty.usbserial-000x)```. 

7. Then click on the ```reset``` button on the site and wait for the color to change green again. Also check if the Motus mini changes the LED colors, which indicates that the device has been reset successfully.

8. You can try to provision your Motus mini again.