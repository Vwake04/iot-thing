const mqtt = require('mqtt');
const chalk =require('chalk');

const options = {
};

// const client  = mqtt.connect('mqtt://test.mosquitto.org:1883');
const client  = mqtt.connect('mqtt://broker.mqttdashboard.com', options);

let state = {
    status: true
}

// Subscribing to a device which will remotely change the state of iot 
client.subscribe("mobile");

client.on("message", (topic, message) => {
    console.log("State Changed")
    console.log(message.toString());
    state = JSON.parse(message.toString());
});

// Publishing the current state at every 1 second 
setInterval(() => {
    state = {
        status: state.status, 
        timestamp: Date()
    }
    // console.log(state);
    client.publish("light", JSON.stringify(state));
}, 1000);
  


