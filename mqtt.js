const mqtt = require("mqtt");

class MQTT {
    constructor(mqttURL, topic) {
        this.client = mqtt.connect(mqttURL);
        this.state = {};
    }

    changeState(subscribeTopic, publishTopic, callback){
        this.client.subscribe(subscribeTopic);
        this.client.on("message", (topic, state) => {
            this.state = JSON.parse(state.toString());
            if(this.state === 0){
                return;
            }
            this.client.unsubscribe(subscribeTopic);
            this.state.status = !this.state.status;
            this.client.publish(publishTopic, JSON.stringify(this.state));
            callback(this.state);
        });
    }

    publish(topic, message, seconds){
        setInterval(() => {
            this.client.publish(topic, message);
        }, seconds)
    }

    subscribe(topic, callback){
        this.client.subscribe(topic);
        this.client.on("message", (topic, message) => {
            callback(message);
        })
    }
}

module.exports = MQTT;
// const fan = new MQTT('mqtt://test.mosquitto.org');
// fan.sendMessage("test", "Hello world!", 1000);