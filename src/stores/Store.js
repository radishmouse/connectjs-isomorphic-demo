var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _data = {
    '1234': {
        name: 'dummy',
        cat: 'no cat'
    }
};

var Store = merge(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    get: function(id) {
        return _data[id];
    },
    getAll: function() {
        return _data;
    }
});

Store.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.type) {
        case "RECEIVE_DATA":
            _data = action.rawData;
            Store.emitChange();
        break;
        default:
        // do nothing
    }
});

module.exports = Store;