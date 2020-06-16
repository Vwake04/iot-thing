const mongoose = require("mongoose");

const Device = mongoose.model("Device", {
    status: {
        type: Boolean
    },

    timestamp: {
        type: String
    }
});

module.exports = Device;