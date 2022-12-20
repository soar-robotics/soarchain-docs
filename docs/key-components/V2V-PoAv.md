---
sidebar_position: 5
---

# V2V Proof-of-Availability

### Vehicle-to-Vehicle Proof-of-Availability

One of the most important aspects of Soarchain is the vehicle-to-vehicle connectivity that enables geographically proximate vehicles(and any node that contains V2V functionality on the hardware level) to communicate application-specific data to each other without depending on any type of fixed infrastructure or direct line-of-sight between the vehicles. 

Through this mechanism, our goal is to create a global fleet of locally-aligned vehicular ad hoc networks that communicate mission-critical data to each other and unlock countless road safety, carbon-emission reduction and collective perception applications. 

We propose a method to verify that **$n_{bx}$** number of messages have been broadcast by a Motus device by only validating **$p_{bx}$** number of those messages where 	$\log(p_{bx})$ > **$f_{bx}$** and **$f_{bx}$** is a network security parameter,  as well as verify **$n_{rx}$** number of messages have been independently and correctly received and processed by a Motus device by only validating **$p_{rx}$**  number of those messages where $\log(p_{rx})$ > **$f_{rx}$** and **$f_{rx}$** is a network security parameter. 

Since all devices capable of V2V communication are required to both broadcast(bx) and receive(rx) messages, Soarchain incentivizes honest behavior for both of these modes for each device, and each device is expected to participate and provide proofs for both V2V Broadcaster Challenge and V2V Receiver Challenge. Note that the names are given according to their modes of V2V communication, therefore a “receiver” can also be found “sending” data to the network, which is realized through the cellular network rather than the V2V interface. 

