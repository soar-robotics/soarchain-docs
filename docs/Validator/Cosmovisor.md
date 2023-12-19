---
sidebar_position: 5
---

# Setting up Cosmovisor

Configuring Cosmovisor is generally uncomplicated. Nonetheless, it requires the setup of specific environment variables and a designated folder structure. Cosmovisor facilitates the advance downloading of binaries for chain upgrades, enabling upgrades with minimal or no downtime. This feature is particularly beneficial if a chain upgrade is scheduled at an inconvenient time due to time zone differences. Instead of performing challenging operational tasks late at night, Cosmovisor aims to automate these processes, offering a more streamlined solution.

## Install 
First install cosmovisor:

```sh
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
```

Your installation can be confirmed with:

```sh
which cosmovisor
```

This will return something like:

```sh
/home/<your-user>/go/bin/cosmovisor
```
## Add environment variables to your shell

n the .profile file, usually located at ~/.profile, add:

```sh
export DAEMON_NAME=soarchaind
export DAEMON_HOME=$HOME/.soarchain
```

Then source your profile to have access to these variables:

```sh
source ~/.profile
```

## Set up folder structure

Cosmovisor expects a certain folder structure:

```sh
.
├── current -> genesis or upgrades/<name>
├── genesis
│   └── bin
│       └── $DAEMON_NAME
└── upgrades
    └── <name>
        └── bin
            └── $DAEMON_NAME
```

set up this folder structure: 

```sh
mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin && mkdir -p $DAEMON_HOME/cosmovisor/upgrades
```

## Set up genesis binary

Cosmovisor needs to know which binary to use at genesis. We put this in $DAEMON_HOME/cosmovisor/genesis/bin.

First, find the location of the binary you want to use:

```sh
which soarchaind
```

Then use the path returned to copy it or use $HOME to the directory Cosmovisor expects. 

```sh
cp $(which soarchaind) $DAEMON_HOME/cosmovisor/genesis/bin
```

## Set up service

Commands sent to Cosmovisor are sent to the underlying binary. For example, cosmovisor version is the same as typing soarchaind version.

Nevertheless, just as we would manage soarchaind using a process manager, we would like to make sure Cosmovisor is automatically restarted if something happens, for example an error or reboot.

First, create the service file:

```sh
sudo nano /etc/systemd/system/soarchaind.service
```

Add these fileds: 

```sh
[Unit]
Description=Soarchain Daemon (cosmovisor)
After=network-online.target

[Service]
User=<your-ubuntu-user-name>
ExecStart=/home/<your-ubuntu-user-name>/go/bin/cosmovisor start --log_level info --minimum-gas-prices=0.0001utmotus
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=soarchaind"
Environment="DAEMON_HOME=/home/<your-ubuntu-user-namer>/.soarchain"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_LOG_BUFFER_SIZE=512"

[Install]
WantedBy=multi-user.target
```
A description of what the environment variables do can be found [here](https://docs.cosmos.network/main/build/tooling/cosmovisor#command-line-arguments-and-environment-variables).


## Start Cosmovisor

Enable the service and start it:

```sh
sudo -S systemctl daemon-reload
```
```sh
sudo -S systemctl enable soarchaind
```
# check config one last time before starting!
```sh
sudo systemctl start soarchaind
```
Check it is running using:

```sh
sudo systemctl status soarchaind
```
If you need to monitor the service after launch, you can view the logs using:

```sh
journalctl -fu soarchaind
```

If you fail in any step please contact with us through Discord or our other channels.

# After setting up your Cosmoviser, please continue with the [Become a Validator](https://docs.soarchain.com/Validator/Create%20Validator) step.