const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/iotData";
mongoose.connect(URL, {useNewUrlParser: true, useCreateIndex: true}).then(() => {
    console.log("Connected to DB");
}).catch((error) => {
    console.log(error);
})

