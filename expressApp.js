const express = require("express");
const mqtt = require("./mqtt");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        express: "Something else!"
    });
});

app.get("/switch", (req, res) => {
    const device = new mqtt('mqtt://broker.mqttdashboard.com');
    device.changeState("light", "mobile", (state) => {
        res.status(201).send(state);
    });
});

app.listen(1234, (error) => {
    if(error){
        console.log("Internal Server Error");
        return;
    }
    console.log("server is running on port 1234");
});