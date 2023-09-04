---
sidebar_position: 4
---

## Interaction with custom modules functionalities using smart contracts


This guide will aim to provide you all information about interacting with Soarchain Smart contracts via custom modules such as Poa module. This is useful for dApp developers who need to create their own contracts on the Soarchain. There are some requirements that need to be done before starting to develop.

**Basic Blockchain & DApp Understanding** — These documents suppose you are familiar with, or having used DApps before. We also will be assuming that you have Blockchain installed and have a basic understanding of it. More information will be found in before starting section.

### Prerequisites

* Smart contract should be written using Rust language
* Smart contract should already be deployed into the Soarchain network
* An account should be registered into the Soarchain network, this will use as a sender and will pay for gas and fee amounts
* A local Soarchain node should be launched - (Not needed when connecting to mainnet)

You will find more information about how can write Cosmwasm smart contracts from [Here](https://github.com/CosmWasm)


### Setting Up the Project

* Wasm bindings listed under **wasmbinding** directory
* Write the query into **Query.go** file which is be found under Bindings directory
* Write the messages into **msg.go** file which is be found under Bindings directory
* **message_plugin.go** is the place for writing the query logic
* **queries.go** is the place for writing the queries which is call byt querier
* **query_plugin.go** in this file we will call the query that we write in the message_plugin



Once, the query is created and call is made for running that query then contract implementation should be started by Rust code.

Lets define the process in the soarchain code.

**First** Define a rpc endpoint and create a client object:


```shell
let rpcEndpoint = "http://localhost:26657/";
```
OR you can also connect to the devnet by replacing rpcEndpoint

**Second** Register a client into the chain.

**Third** Create binding codes into **bindings/query.go** for the object that you need to fetch its information. Let's see the process by giving an example for fetching a client properties.

```shell
type SoarchainQuery struct {
	ClientByIndex *ClientByIndex `json:"client_by_index,omitempty"`
}

type ClientByIndex struct {
	Index string `json:"index"`
}

type ClientByIndexResponse struct {
	Address string `json:"address"`
}
```

**Forth**
Now it is the time to create the query and call inside it the custom module queries.

```
func GetClientByIndex(ctx sdk.Context, index string, poa poaKeepers.Keeper) (res bindings.ClientByIndexResponse, err error) {


	var response bindings.ClientByIndexResponse

	logger := poa.Logger(ctx)

	client, found := poa.GetClient(ctx, index)
	if !found {
		return response, sdkerrors.Wrapf(sdkerrors.ErrNotFound, "[Message_PlugIn][GetClientByIndex] failed.", index)
	}

	response.Address = client.Address

	return response, nil
}
```

**Fifth**
Finally we need to call the query into the **query_plugin.go** file to make a reference to custom module queries.

```
        index := contractQuery.ClientByIndex.Index
        client, err := GetClientByIndex(ctx, index, *qp.keeper)
```

Now we created bindings for custom modules (Poa) queries and we need to wcall it via smart contract codes.


## Rust Bindings

This [Link](https://github.com/CosmWasm/token-bindings) is as a reference to the custom module bindings in the Rust smart contracts.