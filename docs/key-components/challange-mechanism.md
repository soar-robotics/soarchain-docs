---
sidebar_position: 7
---

# Challange Mechanism


As an efficient data availability verification method, Soarchain utilizes various challenge mechanisms. A challenge is simply a request to receive data to be verified from a node which claims to have generated that specific data. It provides the participating nodes a cryptographically secure way to prove that their connectivity and computational resources have been available throughout a specific timeframe. 

Due to the high degrees of mobility and heterogeneous distribution of the vehicle types of the participating network nodes, multiple types of challenges exist within the network to ensure the correct and honest operation of nodes which results in fair and timely distribution of rewards. 

Challenge mechanisms in Soarchain are designed to maximize the useful work done by each node to serve the main applications/functions of the network while also verifying the and securing the nodes with minimal non-useful work. The presented data in response to a challenge is utilized for doing useful work such as verifying that the node which provided the response in fact is acting honestly.


### V2N Runner Challenges

When a V2N broadcaster successfully transmits a message to a runner, it gets recorded to the runner’s temporary database. This runner can request a challenge when it is eligible(either due to time limit or amount of messages in its database). A V2N broadcaster’s rewards are calculated according to the number of successful messages that they transmit. The eligibility for the reward is verified by the runner and is submitted to the validators as a reward distribution transaction for the V2N broadcaster of interest. 


> A detailed explanation of **V2V Receiver Challenge** and **V2V Broadcaster Challenge** can be found on the [Soarchain Whitepaper](https://www.soarchain.com/).

## Consensus

Most of the heavy duty operations such as continuously creating a new Merkle tree from each new message generated and received, as well as recreate parts of the Merkle trees whenever demanded by the challengers are all handled by Motus devices participating in the network. Once all challenge response data have been input back to a group of randomly chosen challengers by the message generating and receiving parties, default verification steps are executed on the data by the challengers such as signature verification, plausibility of received signal’s attributes, location verification etc. 

While doing these operations, the challengers create a verifiable computation fingerprint to be later on verified by the validators, as part of the built-in logic. After the input data passes the default verification steps and the computation fingerprint is created, validators start the consensus process and try to achieve consensus on the proposed block data received from the challengers. Once the supermajority of the validator nodes reach consensus on the input data, the reward distribution process starts on the validator network and the block is finalized. 