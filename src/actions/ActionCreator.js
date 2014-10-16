var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    receiveAll: function(rawData) {
        AppDispatcher.handleServerAction({
            type: "RECEIVE_DATA",
            rawData: rawData
        });
    }
};