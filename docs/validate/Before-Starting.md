---
sidebar_position: 1
---

# Before starting
Soarchain utilizes Tendermint Core as its underlying technology, which leverages a group of validators to verify and validate new blocks added to the blockchain. These validators are full node operators who participate in the consensus protocol by broadcasting votes that contain signatures of them.

To become validators, individuals are required to bond the native $MOTUS token of Soarchain and have tokens delegated to them by token holders. Validators and their delegators receive rewards in $MOTUS for their contribution towards the security of the Soarchain. Validators are permitted to set a commission on the rewards earned by their delegators.

In addition to validators, the Soarchain community promotes and encourages anyone to run a full node of the network to broadcast transactions and connect directly to the network. As Soarchain expands, the core development team and community will continually maintain the chain and release new requirements for node administrators.


# Hardware prerequisites

The following minimum hardware requirements are recommended for running a full node on the Testnet:

- 8-core (4 physical core), x86_64 architecture processor
- 16 GB RAM 
- 250 GB SSD Storage
- 100 Mbps for Download/100 Mbps for Upload



# Setting up dependencies

First, make sure to update and upgrade the OS:


```sh
sudo apt update && sudo apt upgrade -y
```
## Install Build Requirements 

```sh
sudo apt install git build-essential ufw curl jq snapd --yes
```

## Install Go 1.18

Currently, Soarchain uses Go 1.18 to compile the code.

```sh
wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.18.1
```

Now add /usr/local/go/bin directory to $PATH:
```sh
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

Check Go version:
```sh
$ go version
go version go1.18.1 linux/amd64
```

## Install Ignite CLI

Currently, Soarchain uses Ignite to build the chain.


```sh
curl https://get.ignite.com/cli! | bash
```


```sh
$ ignite version
Ignite CLI version: v0.26.1
...
```


