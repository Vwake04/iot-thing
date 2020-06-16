const Device = require("./db/models/device");
const MQTT = require("./mqtt");
require("./db/mongooseDB");

const options = {};

// const device = new MQTT('mqtt://test.mosquitto.org');
const device = new MQTT('mqtt://broker.mqttdashboard.com', options);

device.subscribe("light", (s) => {
    let state = JSON.parse(s.toString());
    if(state === 0){
        return;
    }
    const deviceData = Device(state);
    deviceData.save().then(() => {
        console.log(deviceData);
    }).catch((error) => {
        console.log(error);
    })
});




