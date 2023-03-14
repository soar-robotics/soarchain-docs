---
sidebar_position: 4
---

# Become a Validator at Soarchain

There are two methods to become a validator. The first way is by being pre-established in the genesis state. Alternatively, the existing validator set can be changed in response to the EndBlock message by the ABCI app.

## Initialize Wallet Keyring

You can add an existing wallet through your seed phrase or you can create a new wallet:

```sh
soarchaind keys add KEY_NAME
```

You can check your mnemonic using:

```sh
soarchaind keys list
```
## Validator Public Key

Before you can initialize your validator, you need to obtain your validator public key, which was generated when you initialized your node. To retrieve your validator pubkey:

```sh
soarchaind tendermint show-validator
```

## Create Validator Tx

To successfully send a transaction, make sure you have a small amount of $MOTUS in the wallet address associated with your keyring.

```sh
soarchaind tx staking create-validator \
--from=[KEY_NAME] \
--amount=[staking_amount] \
--pubkey=$(soarchaind tendermint show-validator) \
--moniker="[moniker_id_of_your_node]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]" \
```

