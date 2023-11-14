---
sidebar_position: 4
---

# Become a Validator at Soarchain

## Overview

This guide provides a comprehensive overview of how to become a validator on Soarchain. There are two primary methods to become a validator:

1. **Being Pre-established in the Genesis State:** Validators can be part of the initial setup.
2. **Change in Response to the EndBlock Message:** The existing validator set can be altered based on the ABCI application's EndBlock message.

## Step 1: Initialize Wallet Keyring

To become a validator, first, you need to set up your wallet keyring. You have two options:

- **Add an Existing Wallet:** Use your seed phrase to add an existing wallet.
- **Create a New Wallet:** Generate a new wallet.

### Add or Create a Wallet

```bash
soarchaind keys add YOUR_KEY_NAME
```

### Check Your Mnemonic

```bash
soarchaind keys list
```

## Step 2: Obtain Validator Public Key

Before initializing your validator, you need to retrieve your validator public key.

### Retrieve Validator Public Key

```bash
soarchaind tendermint show-validator
```

## Step 3: Create Validator Transaction

Ensure you have a small amount of $MOTUS in your wallet for transaction fees.

### Command to Create a Validator

```bash
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

### Example Command

```bash
soarchaind tx staking create-validator \
--from=flyingcar \
--amount=2000000utmotus \
--pubkey=$(soarchaind tendermint show-validator)  \
--moniker="flyingcar" \
--chain-id="soarchaintestnet" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="1" \
--gas=203173 \
--gas-prices="0.0001utmotus"

```
If you require additional clarification regarding any of the command flags,
<details>
  <summary>Check them</summary>
  <div>

> - the from flag is the KEY_NAME you created when initializing the key on your keyring
> - the amount flag is the amount you will place in your own validator in $MOTUS (in the example, 500000000motus is 500motus(basically delete 6 zero))
> -  the pubkey is the validator public key found earlier
> -  the moniker is a human readable name you choose for your validator
> -  the chain-id is whatever chain-id you are working with (in the soarchain testnet case it is soarchaintestnet)
> -  the commission-rate is the rate you will charge your delegates (in the example above, 10 percent)
> -  the commission-max-rate is the most you are allowed to charge your delegates (in the example above, 20 percent)
> -  the commission-max-change-rate is how much you can increase your commission rate in a 24 hour period (in the example above, 5 percent per day until   reaching the max rate)
> -  the min-self-delegation is the lowest amount of personal funds the validator is required to have in their own validator to stay bonded (in the example above, 500motus)
> - the gas-prices is the amount of gas used to send this create-validator transaction

  </div>
</details>