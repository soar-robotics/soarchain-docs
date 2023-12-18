---
sidebar_position: 4
---

# Soarchain Smart Contract Starter Pack

This is a template to build smart contracts in Rust to run inside a
[Cosmos SDK](https://github.com/cosmos/cosmos-sdk) module on all chains that enable it.
To understand the framework better, please read the overview in the
[soarchain repo](https://github.com/soar-robotics/soarchain-contract-template/blob/master/README.md),
This assumes you understand the theory and just want to get coding.

**Basic Blockchain & DApp Understanding** — These documents suppose you are familiar with, or having used DApps before. We also will be assuming that you have Blockchain installed and have a basic understanding of it.

## Creating a new repo from template

Assuming you have a recent version of Rust and Cargo installed
(via [rustup](https://rustup.rs/)),
then the following should get you a new repo to start a contract:
[Creating a new repo from template](https://github.com/soar-robotics/soarchain-contract-template/blob/master/README.md#creating-a-new-repo-from-template)

## Creating you project

As the name of the repository shows, these contracts are templates which means they are a placeholder and you need to replace it with your actual implementation and logic. Into the code there are places that should be replaced with your logic and they have been shown by comments.

## Using your project

Once you have your custom repo, you probably could use some
help from below on how to build the contract.

## Prerequisites

You need to have the `wasm32-unknown-unknown` target installed. 

You can check that via:

```sh
rustc --version
cargo --version
rustup target list --installed
# if wasm32 is not listed above, run this
rustup target add wasm32-unknown-unknown
```

## Compiling and running the contract

Now that you created your custom contract, make sure you can compile and run it before
making any changes. Go to [Deploy a Smart Contract](https://docs.soarchain.com/smart%20contracts/Deploy-a-Smart-Contract#deploy-a-smart-contract) and do all steps one by one.


Please replace this README file with information about your specific project, and set some proper description in the README.

## Decentralized Verification

It's not very practical to do a deep code review on every dependency you want to use, which is a big reason for the popularity of code audits in the blockchain world.

Luckily, there is an amazing project called [crev](https://github.com/crev-dev/cargo-crev/blob/master/cargo-crev/README.md) that provides `A cryptographically verifiable code review system for the cargo (Rust) package manager`.

I recommend that CosmWasm contract developers get set up with this. If you want to use `cargo-crev`, please follow their [getting started guide](https://github.com/crev-dev/cargo-crev/blob/master/cargo-crev/src/doc/getting_started.md)
