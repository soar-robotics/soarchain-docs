---
sidebar_position: 4
---

# Soarchain Smart Contract Starter Kit

Welcome to the Soarchain Smart Contract guide! This guie is designed to help you build smart contracts in Rust, specifically for deployment in modules compatible with the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk). It's crafted for all chains that support this functionality. To get a comprehensive understanding of the underlying framework, we highly recommend reviewing the detailed overview provided in the [Soarchain contract templates repository](https://github.com/soar-robotics/soarchain-contract-template/blob/master/README.md). This guide presumes a foundational knowledge of blockchain theory and a readiness to dive into coding.


**Essential Blockchain & DApp Knowledge** — This documentation assumes your familiarity with blockchain concepts, DApps, and the basic operational knowledge of Blockchain.

## Initializing a New Repository from the Template

Ensure you have the latest versions of Rust and Cargo (via [rustup](https://rustup.rs/)). Follow these steps to initialize a new repository for your contract from our template:
[How to Create a New Repo from the Template](https://github.com/soar-robotics/soarchain-contract-template/blob/master/README.md#creating-a-new-repo-from-template)

## Project Development

This repository serves as a template. It means you'll find placeholders that you need to replace with your actual implementation and logic. Look for comments in the code to guide you where replacements are needed.


## Using Your Customized Project

After customizing the repository, you might need guidance on building your contract. The following section provides essential information.

## Prerequisites

Ensure the `wasm32-unknown-unknown` target is installed:

```sh
rustc --version
cargo --version
rustup target list --installed 
```


# If wasm32 is not listed, run the following command:

```sh
rustup target add wasm32-unknown-unknown
```

---

## Compiling and Running Your Contract

With your customized contract ready, it's crucial to compile and run it to ensure everything is set up correctly. Follow the steps outlined in [Deploy a Smart Contract](https://docs.soarchain.com/smart%20contracts/Deploy-a-Smart-Contract#deploy-a-smart-contract) thoroughly.

Remember to update this README with information specific to your project, providing a detailed description of its functionality.

## Decentralized Verification

Performing an in-depth code review for every dependency is impractical, leading to the rise of code audits in the blockchain sector.

An effective solution is the [crev](https://github.com/crev-dev/cargo-crev/blob/master/cargo-crev/README.md) project, which offers `A cryptographically verifiable code review system for the cargo (Rust) package manager`.

We recommend CosmWasm contract developers to integrate this into their workflow. To get started with `cargo-crev`, follow their [Getting Started Guide](https://github.com/crev-dev/cargo-crev/blob/master/cargo-crev/src/doc/getting_started.md).
