---
sidebar_position: 2
---

# Build Soarchain

## Step 1: Download and Unzip the File

**Locate the `release.zip` File:** Ensure you have the `release.zip` file downloaded on your local machine.

**Unzip the File:**
   - Open your terminal.
   - Navigate to the directory containing `release.zip`.
   - Run the following command:
     ```
     unzip release.zip
     ```
   - This will extract the contents into a folder

## Step 2: Transfer Files to the Remote Server

1. **Prepare to Transfer:**
   - Ensure you know the username, IP address of the remote server, and the destination path where you want to transfer the files.

2. **Transfer the Files:**
   - In your terminal, use the `scp` command to securely copy the extracted folder to your remote server:
     ```
     scp -r <extracted_folder> <username>@<remote-server-IP>:<destination-path>
     ```
   - Replace `<extracted_folder>`, `<username>`, `<remote-server-IP>`, and `<destination-path>` with the appropriate values.


## Step 3: Set Up Soarchain on the Remote Server

1. **Connect to Your Remote Server:**
   - Use SSH to connect to your remote server:
     ```
     ssh <username>@<remote-server-IP>
     ```

2. **Navigate to the Transferred Folder:**
   - Once logged in, navigate to the folder where you transferred the Soarchain files.
     ```
     cd <destination-path>/release
     ```

3. **Extract the Binary File:**
   - Extract the `soarchain_linux_amd64.tar.gz` file:
     ```
     tar -xzvf soarchain_linux_amd64.tar.gz
     ```

## Step 4: Finalize Installation

1. **Set Execution Permissions:**
   - Set the necessary permissions to the binary file:
     ```
     chmod +x soarchaind
     ```

2. **Move Binary to a Global Location:**
   - Move the `soarchaind` binary to `/usr/local/bin` to allow execution from any location:
     ```
     sudo mv soarchaind /usr/local/bin
     ```

3. **Verification:**
   - Verify that `soarchaind` can be run from any location:
     ```
     soarchaind --version
     ```

## Step 5: Configuration

1. **Run Configuration Script:**
   - Execute the `run_makefile.sh` script to configure your node:
     ```
     ./run_makefile.sh
     ```
   - This script will set up your node name, add persistent peers and timeout_commit to your `config.toml`, and install necessary dependencies and the testnet genesis file.

## Step 6: Adding Accounts to the Node

1. **Create a New Account:**
   - To add a new account to your node:
     ```
     soarchaind keys add name-your-account --keyring-backend os --algo secp256k1
     ```
   - Replace `name-your-account` with your desired account name.
   *Make sure you saved your mnemonics phrase before moving on!

2. **Recover an Account Using Mnemonic:**
   - If you need to recover an account using a mnemonic phrase:
     ```
     soarchaind keys add name-your-account --recover --keyring-backend test --algo secp256k1
     ```
   - Follow the prompts to enter your mnemonic phrase.

