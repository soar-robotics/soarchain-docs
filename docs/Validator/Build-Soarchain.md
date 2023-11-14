---
sidebar_position: 2
---

# Build Soarchain

The following section explains how to build the Soarchain full node:

In order to build Soarchain, the source code is needed.

To do that,
Clone the Soarchain-core repo:
```sh
cd $HOME
git clone git@github.com:soar-robotics/soarchain-core.git
```

Then, run the makefile to build Soarchain-core:
```sh
./run_makefile.sh
```

If the soarchaind command is not available, confirm that the GOPATH is configured correctly with this command.
```sh
export GOPATH=$HOME/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
```

To verify that soarchain is installed:
```sh
soarchind version --long
```

# External validators will not do the first part of Build Soarchain, they will have to start from the If you're one of the validators using the binary to run a node, follow here:

Extract the binary file: 

```sh
cd release 
tar -xzvf soarchain_linux_amd64.tar.gz
```

Now you have the soarchaind binary, move it to the /usr/local/bin. This allows you to run the binary from any location in the terminal. 

```sh
chmod +x soarchaind
sudo mv soarchaind /usr/local/bin
```

Now it's time to do some configurations. This will input your node name and creates the node for you, moreover, this makefile will add persistent peers and timeout_commit to your config.toml. Also it will add some dependencies and testnet genesis file.
```sh
./run_makefile.sh
```

Add your accounts to the node; if you want to recover from a mnemonic, use the --recover option:

```sh
soarchaind keys add name-your-account --keyring-backend os --algo secp256k1
soarchaind keys add name-your-account --recover --keyring-backend test --algo secp256k1 
```

That's all the things you need to do. You can continue with creating the validator and cosmovisor part if required. 