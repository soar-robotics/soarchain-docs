---
sidebar_position: 3
---

# Running MQTT Listener

## Using pip

Run the following command in the root directory to initiate the data streaming process. The retrieved data will be automatically stored in a generated file dedicated to data storage.

```shell
make collect-data-py
```

The command make `collect-data-py` is likely part of a Makefile in a project, and it's used to execute a specific task related to collecting data using Python.

### File: mqtt_listener.py

**Description**:

mqtt_listener.py is a Python script utilizing the Paho MQTT client library to subscribe to an MQTT broker, capture messages on a designated topic, and record the data into a timestamped CSV file. The code extracts environmental variables for MQTT configuration, generates a unique CSV file name, and initializes the file with headers. The MQTT listener establishes a connection, subscribes to the specified topic, and continuously listens for incoming messages. Upon reception, it decodes and parses the payload as JSON, logging the message, topic, and timestamp to the CSV file.

**Key Sections**:

* MQTT Configuration

```python
mqtt_topic = os.getenv("MQTT_TOPIC", "dpr/${dpr_id}")
mqtt_broker_ip = os.getenv("MQTT_BROKER_IP", "localhost")
mqtt_port = int(os.getenv("MQTT_PORT", 1883))
```

* CSV File Initialization

```python
def init_csv():
    # Code to initialize the CSV file with headers
```

* CSV Write Function:

```python
def write_to_csv(topic, message):
    # Code to write a message to the CSV file
```

* MQTT Connection and Message Handling

```python
def on_connect(client, userdata, flags, rc):
    # Code to connect to the MQTT broker and subscribe to the topic

def on_message(client, userdata, msg):
    # Code to handle incoming messages, decode JSON, and write to CSV
```

* Script Execution

```python
init_csv()
client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION1)
# Code to set up callbacks and connect to the MQTT broker
client.loop_forever()
```

## Using node

Run the following command in the root directory to initiate the data streaming process. The retrieved data will be automatically stored in a generated file dedicated to data storage.

```shell
make collect-data-ty
```

The command make `collect-data-ty` is likely part of a Makefile in a project, and it's used to execute a specific task related to collecting data using Typescript.

Both commands create a `CSV` file which is `output.csv` in the root directory, and data is streamed and stored, containing all vehicle `PIDs` associated with your Data Processing Request `(DPR)`.

**Notification**: Whether you are familiar with Python or TypeScript is not crucial; you can still obtain the data simply by executing the provided commands. The information provided about the code is intended solely for guidance.

## View Raw Data

Explore the generated `CSV` file from the root directory to access the raw vehicle data collected from the `MQTT` broker.

## Execute the data computation process

```shell
make compute-data
```

The script, `run_compute_data.sh`, is given executable permissions and executed to map vehicle `PIDs` to actual data. Ensure that the script is properly configured and contains the necessary logic for computing the data. Adjust permissions and script paths as needed before running this target.

## Analyze Processed Dataset

Delve into the processed dataset, where the collected PIDs are mapped to their actual descriptions and corresponding values. This step ensures a comprehensible and usable data structure for further analysis.

By following these steps, users can effectively navigate the process of accessing and analyzing vehicle data within the SoarChain ecosystem.
