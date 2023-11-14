---
sidebar_position: 3
---

# Quick Guide to Starting and Monitoring Syncing on Soarchain

## Starting the Syncing Process

Once you've set up your Soarchain full node, the next step is to start syncing it with the blockchain. Here's how you can initiate the syncing process:

1. **Open your terminal** and ensure you're connected to your server where the Soarchain node is set up.

2. **Execute the following command** to start the syncing process:

    ```bash
    soarchaind start --log_level info --minimum-gas-prices=0.0001umotus
    ```

    - This command starts the Soarchain daemon with logging level set to `info`, providing a moderate amount of log output.
    - The `--minimum-gas-prices` flag sets the minimum gas prices to `0.0001umotus`, a necessary parameter for transaction processing.

## Checking the Status of Syncing

To monitor the progress of your node's syncing with the Soarchain blockchain, use the following command:

1. **In your terminal**, while the node is running, open a new terminal session or tab to check the syncing status.

2. **Run this command** to check the sync status:

    ```bash
    soarchaind status | jq '.sync_info'
    ```

    - This command fetches the current status of your node in JSON format and uses `jq` to parse and display the sync information.
    - You will see various details about the syncing process, including the latest block height your node has synced to.

By following these steps, you can effectively start syncing your Soarchain node and monitor its progress to ensure it is successfully staying up to date with the blockchain.