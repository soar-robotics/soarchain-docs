---
sidebar_position: 1
---

# Overview

The GitHub repository, named `"soarchain-data-processing-framework,"` is dedicated to a robust data processing solution for handling vehicle data from an `MQTT` broker. The repository is designed to efficiently subscribe to the `MQTT` broker, retrieve vehicle PID `(Parameter ID)` information, and store the raw data into a `CSV` file for further analysis.

## Key Features

- **MQTT Integration**: Seamless integration with an `MQTT` broker for real-time data ingestion.

- **Data Storage**: Captures vehicle `PIDs` and persistently stores them in a `CSV` file for historical reference and analysis.

- **PID Mapping**: Utilizes a mapping mechanism to associate raw `PIDs` with their corresponding descriptions and values.

- **Dataset Creation**: Generates a new dataset by mapping `PIDs` to actual descriptions and values, providing a more comprehensible and usable data structure.

- **Documentation**: Includes detailed tutorials, documents, and technical specifications to guide users through the setup, operation, and understanding of the data processing workflow.

## Bird View

>![Big Picture](/static/img/data-processor-flow.drawio.png)

## Data Processing Sequence

Accessing vehicle data within SoarChain involves the creation of a Data Provisioning Request (DPR), which serves as a data acquisition request with defined characteristics. Through the DPR, users can specify the duration for acquiring data, set budgets for rewarding vehicle drivers, and more.

>![Big Picture](/static/img/sequence.png)

Follow these steps to access vehicle data in SoarChain:

1- **Create a Wallet**: Begin by setting up an account within the SoarChain network using the SoarChain mobile application. Comprehensive details can be found in the [SoarChain Documentaion](https://docs.soarchain.com/)

2- **Submit genDpr Transaction:**: Trigger a genDpr transaction on the SoarChain network, marking the initiation of a Data Processing Request with customized parameters.

3- **DPR Creation**: Following the transaction submission, a corresponding Data Processing Request `(DPR)` object is generated and recorded on the chain.

4- **Automatic Topic Creation**: The system automatically creates a topic, `"/dpr/{your_dpr_id},"` in SoarChain brokers. Motus mini devices transmit vehicle data to this topic. Leveraging the SoarChain Data Processing Framework facilitates seamless access to your requested data.

5- **dpr_listener Script Execution**: Execute the `dpr_listener` script with the correct broker information. This script reads data from SoarChain brokers, streaming the data into a designated file of your choice.

6- **Data Transformation**: When data received it is time to transfer the `PIDs` to real values and description and compute the data

7- **Compute and Save Data**: The SoarChain Data Processing Framework plays a pivotal role in computing data, converting PIDs into real values and descriptions. The processed data is then diligently saved into a `CSV` file, ready for analysis and interpretation
