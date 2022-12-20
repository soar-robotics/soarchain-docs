---
sidebar_position: 2
---

# Nodes

### Soarchain Mobility Network comprises different types of nodes, either categorized according to the degree that they store blockchain data and allow access to the data or according to their duty and expected collaboration within the network.

### Full Nodes

A full node is a blockchain participant that possesses a complete copy of the blockchain. Full nodes play an important role in maintaining the security and stability of the blockchain network by validating and relaying transactions. They also help to keep the blockchain network decentralized by providing a platform for participating nodes to reach consensus on the blockchain's consensus rules.

### Light Nodes

The notion of light nodes was established in the Bitcoin whitepaper. It discusses a distributed consensus process tracker that only verifies the consensus method and not the state machine transitions included within the blockchain. A light node is a simplified version of a complete node. Full nodes consume a lot of resources since they execute transactions and verify the results. Light clients, on the other hand, have much lower resource requirements because they just validate results (without actually executing the transactions). As opposed to full nodes that store a large amount of data including blocks, transactions, results etc., light clients only keep a few of the most recent headers.

### Challenger Nodes

As their name suggests, challenger nodes create challenges to be accepted by the participants  of the network. Different types of challenges are defined within the network, each of which serves a different purpose and plays a key role in ensuring the honest behavior of the network participants.

### Validator Nodes

A validator node is responsible for block proposal, block validation, block information propagation(to other nodes) and block finalization. They participate in the consensus protocol by “voting” on the validity of the next block through their cryptographic signatures signed by their corresponding private keys. It is essential that the validator nodes are also full nodes since the whole network depends on validators for the generation and finalization of blocks through consensus.

### Messaging Nodes

A messaging node is responsible for honestly and correctly generating, broadcasting, receiving, processing and verifying purpose-specific messages through an air interface which enables direct communication between geographically proximate nodes. These nodes are rewarded through Soarchain’s incentive mechanism on a regular basis according to their reputation scores.

### Computational Nodes

A computational node is responsible for honestly and correctly executing a specific computational task demanded by an authorized and authenticated node. The computational tasks that they are expected to perform could range from receiving, preprocessing and compressing simple ego-vehicle data to more advanced tasks such as running plausibility checks for the received proximate vehicle data and even running distributed computing tasks which are delegated to them by projects that are run by institutions. Ultimately, computational nodes will run the latest autonomous driving software version while periodically generating proofs to verify that they have been running that version of the software.