---
sidebar_position: 6
---

# V2N Proof-of-Availability

### Vehicle-to-Network Proof-of-Availability

Another very significant aspect of Soarchain is the vehicle-to-network connectivity that enables any vehicle or road user to communicate application-specific data to the consumers of that data through any protocol that can act as a relay to the internet. Through this mechanism, our goal is to create a global fleet that streams large amounts of data to the cloud and unlock countless data collection and device management applications as well as third-party services. 

V2N PoAv works similar to the V2V PoAv, except that the transmission of data is done to a decentralized entity called “runner”, which is a cloud server that is powered by the people of the network. They are responsible for receiving messages from the V2N broadcasters and keeping the messages in their database temporarily. 

Once they become ready to be challenged, they send a claim that contains the last message in its buffer, the Merkle root that is generated from the messages, and some other metadata to the “V2N Challengers”, which sends back a challenge to the runner, asking for a random set of messages that are used to create the Merkle tree that was shared with it in the first place. This part is very similar to the V2V PoAv procedures that take place between the Receiver and the Challenger 

> Runner can be thought of as the Receiver in V2V PoAv. 
