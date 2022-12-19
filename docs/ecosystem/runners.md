---
sidebar_position: 1
---

# Runners

A runner is a special type of virtualized generic compute node, which receives structured data from the network participants to run computations over the data. The validity of the data can be verified by the V2N Runner Challengers through the challenge mechanism with a special procedure if the data is received from a V2N Broadcaster to participate in V2N rewards. 

Otherwise, it can be directly verified through a verifiable computational fingerprint that the runner generates. Runners can be spun up on Soarchain by sending a create-runner transaction and staking the minimum amount of tokens required for a single runner.

Runners have the ability to execute generic computations and generate computational proofs from these computations that prove to the validator network that exact computations demanded by the network. Runners can be utilized as trusted parties and can be deployed by any node that needs to outsource their computation. Alternatively, runners support a trustless set up where they can compute over encrypted data and return the output to the owner without ever decrypting it. 
