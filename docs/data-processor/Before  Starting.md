---
sidebar_position: 3
---

# Installation

To set up the required dependencies for this project, follow these steps:

## Step 1: Install Python

Ensure that Python3 is installed on your system. If it's already installed, this step can be skipped.

```shell
sudo apt-get install python3
```

### Step 2: Install paho-mqtt

Paho MQTT is a set of MQTT client libraries written in different programming languages, provided by the Eclipse Paho project. MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for constrained devices and low-bandwidth, high-latency, or unreliable networks. It is commonly used in IoT (Internet of Things) and other scenarios where efficient and reliable communication between devices or applications is required

```shell
pip install paho-mqtt
```

Use pip to install the paho-mqtt library, which is essential for MQTT integration in your Python project. After completing these steps, you should have Python3 installed, and the paho-mqtt library ready for use in your environment.

### Step 3: Install ts-node

ensure you have Node.js and npm installed on your machine. Install ts-node globally to execute TypeScript files directly.
Run the following command to install ts-node:

```shell
npm install -g ts-node
```

### Step 4: Install Required Packages

```shell
npm install
```

### Step 5: Clone the Repository

Clone the repository to your local environment and navigate into the project directory. This framework facilitates the processing of vehicle data.

```shell
git clone https://github.com/soar-robotics/soarchain-data-processing-framework.git

cd soarchain-data-processing-framework
```

Now you're set to begin streaming the specific vehicle data you desire from Motus Minis.
