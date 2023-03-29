---
sidebar_position: 3
---

# Initialize Soarchain Node

First, we need to download the correct genesis file and sync our node with the soarchain testnet. 

```sh
coming soon
```
Copy genesis file into .soarchain/config directory

```sh
cp genesis.json .soarchain/config

```

Open the config.toml to edit the node-name and seeds, persistent_peers:

```sh
cd $HOME/.soarchain/config
nano config.toml
```
Replace NODE_NAME with the name of your node:
```sh
moniker = "NODE_NAME"
```

Replace seeds = "" with the following:

```sh
seeds = "Will be given when testnet starts"

```
Add persistent_peers:
```sh
persistent_peers = "Will be given when testnet starts"

```
Next, we need to chose how much historical state we want to store. To open the application config file:

```sh
nano $HOME/.soarchaind/config/app.toml
```

In this file, you can choose between default, nothing, and everything. To reduce hard drive storage, choose “everything” or “default”. To run an archival node, chose nothing

```sh
pruning = "default"
```

In the same file, node admin can set minimum gas price:

```sh
minimum-gas-prices = "0.001motus"
```

To start syncing:

```sh
soarchaind start --log_level info --minimum-gas-prices=0.0001umotus
```

To check on the status of syning:
```sh
soarchaind status --output json jq '.sync_info'
```