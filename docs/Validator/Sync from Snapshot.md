---
sidebar_position: 7
---

# Syncing a Node to the Soarchain Testnet from a Snapshot

This guide outlines the process for quickly syncing a node to the Soarchain testnet by utilizing a snapshot. This method is a shortcut that bypasses the conventional, more time-consuming sync processes.

## Prerequisites

Ensure you have followed the initial steps for setting up your node, including the installation and configuration of Cosmovisor. **Important:** Do not start your node immediately after configuring Cosmovisor.

## Download and Extract Snapshot

Kjnodes Validator provides snapshots for the Soarchain testnet community. These snapshots are state-synced periodically, meaning they offer a compact size at the expense of not containing the full historical data. This trade-off results in faster sync times.

### Step-by-Step Instructions

1. **Download Snapshot:** Access the [Soarchain Testnet Snapshot provided by kjnodes](https://services.kjnodes.com/testnet/soarchain/snapshot/) to download the latest available snapshot.

2. **Extract Snapshot:** After downloading, you'll need to extract the snapshot into your node's data directory. The extraction command depends on the snapshot's format. A common command for a `.tar.gz` file is shown below:

   ```bash
   tar -xvf snapshot.tar.gz -C /path/to/your/node/data

## Start Cosmovisor

After preparing your Soarchain testnet node with the snapshot, the next step is to start the Cosmovisor daemon. This process involves enabling the Cosmovisor service, starting it, and then verifying its operation.

### Enabling and Starting the Cosmovisor Service

Perform the following steps to get Cosmovisor up and running:

1. **Reload Systemd Daemon**

    Before starting Cosmovisor, ensure that the systemd daemon is reloaded to recognize any new or changed services:

    ```bash
    sudo systemctl daemon-reload
    ```

2. **Enable Cosmovisor Service**

    Enabling the Cosmovisor service ensures that it will start automatically upon system boot:

    ```bash
    sudo systemctl enable cosmovisor
    ```

3. **Start Cosmovisor Service**

    With the service enabled, start Cosmovisor to begin the synchronization process:

    ```bash
    sudo systemctl start cosmovisor
    ```

### Verifying Cosmovisor Operation

After starting Cosmovisor, it's important to verify that the service is running correctly and to monitor its operation.

- **Check Cosmovisor Status**

    Use the following command to check the status of the Cosmovisor service. This command provides information on whether Cosmovisor is active and running:

    ```bash
    sudo systemctl status cosmovisor
    ```

- **Monitoring Cosmovisor Logs**

    For ongoing monitoring or troubleshooting, the Cosmovisor logs can be invaluable. Use the following command to follow the logs in real-time:

    ```bash
    journalctl -fu cosmovisor -o cat
    ```

This concludes the process for starting Cosmovisor after restoring a Soarchain testnet node from a snapshot. By following these steps, your node should now be syncing with the testnet, leveraging the snapshot for a faster setup.

