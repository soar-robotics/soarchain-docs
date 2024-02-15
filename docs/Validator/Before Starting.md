---
sidebar_position: 1
---

## Introduction

Soarchain is a blockchain network powered by Tendermint Core, relying on validators to maintain its integrity and security. Validators, who are full node operators, participate in the consensus protocol and are incentivized with $MOTUS tokens. This guide provides a brief overview of becoming a validator and setting up a full node for Soarchain.

### Before Starting

#### Understanding Validators:
- Validators verify and validate new blocks on the Soarchain blockchain.
- To become a validator, bond the native $MOTUS token.
- Validators earn rewards in $MOTUS, sharing a commission with their delegators.

#### Full Nodes:
- Running a full node helps broadcast transactions and maintain network connectivity.
- As the network grows, continuous maintenance and updates are required.

### Hardware Prerequisites

For a Testnet full node, ensure the following minimum hardware requirements:

- **CPU:** 8-core (4 physical cores), x86_64 architecture.
- **Memory:** 16 GB RAM.
- **Storage:** 250 GB SSD.
- **Network:** 100 Mbps Download/Upload.

### Network Configuration

Before setting up the software dependencies, ensure the following network ports are available:

- **gRPC server:** Port `9090` open for gRPC server communication.
- **REST server:** Port `1317` open for REST server requests.
- **Tendermint RPC endpoint:** Ports `26657` and `26656` open for Tendermint RPC connections.

Additionally, configure the Uncomplicated Firewall (ufw) to allow traffic on these ports:

```bash
sudo ufw enable
sudo ufw allow 22/tcp
sudo ufw allow 9090/tcp
sudo ufw allow 1317/tcp
sudo ufw allow 26657/tcp
sudo ufw allow 26656/tcp
```

This configures the firewall to only allow incoming connections on the gRPC, REST, and Tendermint RPC ports while keeping all other ports closed to public communication. Ensure you have allowed SSH (port 22 by default) to maintain remote access to the server.

### Setting Up Dependencies

#### Update and Upgrade OS:

```bash
sudo apt update && sudo apt upgrade -y
```

#### Install Build Requirements:

```bash
sudo apt install git build-essential ufw curl jq snapd --yes
```

#### Install Go 1.18:

Soarchain uses Go 1.18 for compiling code.

```bash
wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.18.1
```

#### Configure Go PATH:

Add Go binaries to your system path.

```bash
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bashrc
```

#### Verify Go Installation:

Check the installed Go version.

```bash
go version # Expected: go1.18.1 linux/amd64
```

## Conclusion

This guide provides a high-level overview of setting up a full node for Soarchain, from understanding the roles of validators and full nodes to configuring the necessary hardware and software dependencies. As Soarchain evolves, staying updated with the latest requirements and best practices is crucial for node administrators.