# MQTT and Express based iot project using node.js

This project has following scripts:
- iotDevice.js:
  - Publishes the state of iot device at every second to a topic named "light".
  - Subscribes to a topic named "mobile" which changes the state of iot device.

- expressApp.js:
  - Implementation of Express sever using node.
  - Makes a http request made through web browser which makes a mqtt request to change the state of device.
  - Whenever a http request is made, it first gets the current state of iot device (that is, by subscribing to "light") and then changes the state of iot device (that is, publishes the state to "mobile"). 

- dbSubscriber.js:
  - Stores the state of iot device at every second in mongodb.

- fileSubscriber.js
  - Stores the state of iot device in textfile.
  
<hr>
Here, HiveMQ public mqtt broker is used. <br>
For more details on mqtt broker visit http://www.hivemq.com/demos/websocket-client/
