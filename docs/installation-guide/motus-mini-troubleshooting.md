---
sidebar_position: 4
---

# Motus mini Setup Troubleshooting


## Provisioning Reset

### Provisioning Reset - Model Number: #000103


Press and hold on the button on the Motus mini for 6 seconds. You will see the LED lights change their state after holding the button for 6 seconds. This indicates the provisioning reset was completed. Finally, you can try to provision your Motus mini again.

### Provisioning Reset - Model Number: #000102


1. Ensure that there are no devices connected to your phone's mobile hotspot by checking from your phone's settings, including the Motus mini. It's possible that the connection may still go through even if the provisioning app prompts a failure. 

2. If there are no devices connected, you will require the following items to reset the Motus mini:

- **A Type C to USB 2.0 cable**
- **A desktop or laptop computer**
- **A Chrome web browser installed on the computer**
- **Your Motus mini**

3. Start by disconnecting any other devices connected to your computer. 

4. Connect your Motus mini to the computer using the Type-C to USB-2.0 cable. If the LED on the Motus mini lights up, it indicates that Motus is ready for the provisioning reset. 

#### Windows Based PC

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

#### Linux Based PC

5. Open up the system terminal and type: 

```
ls /dev/ttyUSB*
```

The output should something like the image below.

>![linux term image](/img/linux_lsdev.png)

6.  Next, open your **Chrome** browser and navigate to this website: https://reset.soarchain.com/. Press ```Connect``` and select the ```CP210x USB to UART Bridge Controller (ttyUSBx)```. 

7. Then click on the ```reset``` button on the site and wait for the color to change green again. Also check if the Motus mini changes the LED colors, which indicates that the device has been reset successfully.

8. You can try to provision your Motus mini again.

#### MAC Based PC

5. Open up the system terminal and type: 

```
ls /dev/tty.usbserial*
```

The output should something like the image below.

>![mac term image](/img/mac_lsdev.png)

6.  Next, open your **Chrome** browser and navigate to this website: https://reset.soarchain.com/. Press ```Connect``` and select the ```CP210x USB to UART Bridge Controller (tty.usbserial-000x)```. 

7. Then click on the ```reset``` button on the site and wait for the color to change green again. Also check if the Motus mini changes the LED colors, which indicates that the device has been reset successfully.

8. You can try to provision your Motus mini again.


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
