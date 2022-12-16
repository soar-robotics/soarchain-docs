---
sidebar_position: 4
---

# Messages

### Cooperative Awareness Message (CAM)
Cooperative awareness means that road users and roadside infrastructure are aware of one other's position, dynamics, and characteristics. Road users include all road vehicles, including automobiles, trucks, motorcycles, bicycles, and even pedestrians, as well as roadside infrastructure equipment, such as road signs, traffic lights, and barriers and gates. Cooperative Awareness is achieved through the regular exchange of information among vehicles, which are facilitated by CAMs. CAM is a message transmitted by a vehicle to other vehicles and roadside units in order to share information about the vehicle's self and its surroundings. The message contains information such as the vehicle's position, speed, heading, braking status etc. This information is then used by other vehicles to improve situational awareness and make decisions such as changing routes or speeds to avoid collisions. 
### Decentralized Environmental Notifications Message (DENM)
DENMs are designed to be sent and received quickly, allowing drivers to be swiftly alerted to any potential hazards or changes in their environment. These changes include but are not limited to car accidents, road construction, adverse weather conditions, and other traffic-related events.  This helps to improve safety by allowing drivers to be aware of their surroundings and make informed decisions about their route. DENMs are emitted based on events in comparison to CAMs emitted all the time in regular intervals. DENMs are also used to help manage congestion by informing drivers of traffic patterns and other conditions that may impact their journey.


### Collective Perception Message (CPM)
The purpose of Collective Perception is to tell other vehicles and road users about the current driving environment. It contains information regarding detected items for this purpose (i.e. other road participants, obstacles and alike). By contributing context information, other vehicles help a vehicle reduce ambient uncertainty about its current environment. CPM is basically the extended version of CAM, that contains more data fields for disseminating raw and processed data from data-intensive sensors that are used in assisted and autonomous driving such as such as radars, lidars, cameras and alike. In order to reduce the resulting channel load and concentrate on reporting changes in the dynamic road environment, the CPM is broadcast cyclically with adaptive message generation rates. 

### Vulnerable Road User Awareness Message (VAM)
Vulnerable Road User Awareness Message is an important tool in helping to reduce the number of collisions between motor vehicles and people who are considered to be more at risk of serious injury or death. This includes pedestrians, cyclists, motorcyclists, and those who use mobility assistance devices such as wheelchairs or walkers. VAMs are messages delivered by the wireless communication device that the VRU carries in order to create and maintain awareness of vulnerable road users utilizing the VRU system. 

A VAM holds information regarding the status and attributes of the originating VRU. The content may vary depending on the VRU profile. Status information often comprises time, location, motion state, cluster status, etc. Typical attribute information provides data about the VRU profile, type, and dimensions, among other characteristics. The receiving vehicle becomes aware of the presence, type, and status of the originating VRU upon reception of a VAM. The information received can be utilized by the receiving vehicle to enable multiple VRU-related ITS applications. Comparing the status of the originating VRU to its own status, for instance, a receiving vehicle can evaluate the collision risk with the originating VRU and warn the driver via the HMI or take assisted action to brake.

### Custom-built Messages
These are ad-hoc messages that serve the purpose of different applications that run on vehicles using Soarchain. The aforementioned messages are intended to be disseminated over the air through direct vehicle-to-vehicle communication. They are verified and incentivized through the vehicle-to-vehicle proof-of-availability(V2V PoAv). On the other hand, each message also has a vehicle-to-network counterpart within Soarchain where decentralized servers help to move data between vehicles, and they are verified and incentivized through the vehicle-to-network proof-of-availability.



