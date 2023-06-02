---
sidebar_position: 2
---

## Deploy a Smart Contract

### Clone `cw-template`

For this example, we will use the [cw-template](https://github.com/CosmWasm/cw-template) repository with the counter example.

```shell
cargo generate --git https://github.com/CosmWasm/cw-template.git --name my-first-contract

```

```shell
🔧   Destination: /home/alp/my-first-contract ...
🔧   project-name: my-first-contract ...
🔧   Generating template ...
? 🤷   The full template includes some example logic in case you're new to CosmWasm smart contracts.
✔ 🤷   The full template includes some example logic in case you're new to CosmWasm smart contracts.
The minimal template assumes you already know how to write your own logic, and doesn't get in your way.

```

select `false`

```shell
cd my-first-contract
```

## Compile the wasm contract with stable toolchain 

To deploy smart contracts, you must compile the code and make it an executable wasm binary file. We will compile the wasm contract with stable toolchain.

```shell
# Set 'stable' as the default release channel:
rustup default stable
cargo wasm
```

After this compiles, it should produce a file in target/wasm32-unknown-unknown/release/my_first_contract.wasm. If you check the size of the file by using the ls -lh command, it shows around 1.9M. This is a release build, but not stripped of all unneeded code. To produce a much smaller version, you can run this which tells the compiler to strip all unused code out:

```shell
RUSTFLAGS='-C link-arg=-s' cargo wasm
```

This produces a file about 155K. To reduce gas costs, the binary size should be as small as possible. This will result in a less costly deployment, and lower fees on every interaction. Also, if you don’t use compilation optimization, CosmWasm smart contract will not be deployed well due to exceeds limit error.

## Optimized Compilation

You can do further optimization using [rust-optimizer](https://github.com/CosmWasm/rust-optimizer), rust-optimizer produces reproducible builds of CosmWasm smart contracts and does heavy optimization on the build size, using binary stripping and wasm-opt.

```shell
docker run --rm -v "$(pwd)":/code \
    --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
    --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
    cosmwasm/rust-optimizer:0.12.8
```

Binary file will be at artifacts/my_first_contract.wasm folder and its size will be about 130K, which is more smaller than when only RUTFLAGS was used.

