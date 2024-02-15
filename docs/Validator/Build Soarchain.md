---
sidebar_position: 2
---

# Build Soarchain Node

## Step 1: Download and Unzip the File

 [Soarchain Testnet Validator Onboard GitHub repository](https://github.com/soar-robotics/testnet-validator-onboard/blob/main/release)

1. **Locate the `release.zip` File:**
   - Ensure the `release.zip` file is downloaded to your local machine.
   - To confirm the file's location, list it directly:
     ```bash
     ls release.zip
     ```
     This command will display `release.zip` if it's in the current directory. If not, ensure you're in the correct directory or move the file accordingly.

2. **Unzip the File:**
   - Open your terminal and navigate to the directory containing `release.zip`.
   - Run the following command to unzip:
     ```bash
     unzip release.zip
     ```
     This extracts the contents into a folder.

## Step 2: Transfer Files to the Remote Server

1. **Prepare to Transfer:**
   - Ensure you have the username, IP address of the remote server, and the destination path where you want to transfer the files.

2. **Transfer the Files:**
   - Use the `scp` command in your terminal to securely copy the extracted folder:
     ```bash
     scp -r <extracted_folder> <username>@<remote-server-IP>:<destination-path>
     ```
     Replace `<extracted_folder>`, `<username>`, `<remote-server-IP>`, and `<destination-path>` with the appropriate values.


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
   - Grant execution rights to the binary file:
     ```bash
     chmod +x soarchaind
     ```

2. **Move Binary to a Global Location:**
   - Relocate `soarchaind` for system-wide accessibility:
     ```bash
     sudo mv soarchaind /usr/local/bin
     ```

## Step 5: Configuration

1. **Run Configuration Script:**
   - Execute `run_makefile.sh` to configure your node:
     ```bash
     ./run_makefile.sh
     ```
     - This script sets up your node name, updates `config.toml` with persistent peers and timeout_commit, and adds necessary dependencies and the testnet genesis file.

2. **Verification Post-Configuration:**
   - Check the `soarchaind` version to confirm successful setup:
     ```bash
     soarchaind version
     ```
     - Run this command after executing `./run_makefile.sh` to verify that `soarchaind` is correctly installed and can be run from any location.

