---
sidebar_position: 2
---

## Install Rust

The primary programming language utilized by CosmWasm smart contracts is Rust. Although any programming language may potentially be used to create WASM smart contracts, Rust is the best choice for CosmWasm libraries and tools.

### Step 1: Install Rust

- Visit the official Rust website at [https://www.rust-lang.org/](https://www.rust-lang.org/).
- Follow the installation instructions specific to your operating system.
- After the installation is complete, open your terminal or command prompt.

### Step 2: Set 'stable' as the default release channel and check the version

```shell
# 1. Set 'stable' as the default release channel:
rustup default stable
cargo version
# If this is lower than 1.50.0+, update
rustup update stable

# 2. Add WASM as the compilation target:
rustup target list --installed
rustup target add wasm32-unknown-unknown

# 3. Install the following packages to generate the contract:
cargo install cargo-generate --features vendored-openssl
cargo install cargo-run-script
```

