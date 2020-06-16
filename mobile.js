const mqtt = require('mqtt');

const client  = mqtt.connect('mqtt://test.mosquitto.org');

const state = {
  status: false
};

client.publish("mobile", JSON.stringify(state));

client.on('message', (topic, message) => {
  state = JSON.parse(message.toString());
  console.log(state);
});



 
