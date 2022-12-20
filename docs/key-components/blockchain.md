---
sidebar_position: 1
hide_table_of_contents: true
---

# Blockchain


### Soarchain is a distributed ledger which is a decentralized, immutable and append-only database that keeps track of the account balances, unique node addresses and various scores of the network participants.

 It is composed of blocks that each contain a header and a Merkle tree that comprises a list of hashes that are generated from the transactions in that block.

 Proof-of-availability is one of the main building blocks of the whole network architecture, thus the Motus devices are required to participate in the creation of proofs by submitting the necessary data when they are asked by the challengers.

 Each Motus has a challenge score which diminishes over time and should be kept over a certain threshold to be able to receive challenges that enable rewards from the finalized proof processes. The signatures and data collected from the challenged Motus are checked by the challengers, and submitted as reward requests to the validators.

 After the block time is reached, validators achieve consensus on the validity and ordering of the transactions, generate and finalize the blocks according to their consensus mechanism. The rewards are distributed at the end of each epoch, which is a constant period which is the total time it takes for a predetermined number of successive blocks to be created.

At a given epoch, a block consists of the following main fields:

- Header
- Transactions
- Evidence
- Last Commit
