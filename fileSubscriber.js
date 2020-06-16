const fs = require("fs");
const MQTT = require("./mqtt");

const device = new MQTT('mqtt://test.mosquitto.org');
device.subscribe("light", (state) => {
    fs.readFile("iotData.txt", (error, data) => {
        if(error){
            fs.writeFile("iotData.txt", JSON.stringify([JSON.parse(state.toString())]), (error) => {
                if(error){
                    console.log("Error while writing to file!");
                }
            });

            return;
        }
        
        data = data.toString();
        if(data === ""){
            data = "[]";
        }
        fData = JSON.parse(data);
        fData.push(JSON.parse(state.toString()));
        fs.writeFile("iotData.txt", JSON.stringify(fData), (error) => {
            if(error){
                console.log("Error while writing to file!");
            }
        });
    })
});