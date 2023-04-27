---
sidebar_position: 2
---

# Build Soarchain

The following section explains how to build the Soarchain full node:

In order to build Soarchain, source code is needed.

To do that,
Clone the Soarchain-core repo:
```sh
cd $HOME
git clone git@github.com:soar-robotics/soarchain-core.git
```

Then, run makefile to build the Soarchain-core:
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

