var ActionCreator = require('../actions/ActionCreator');
var request = require('superagent');
var URL = 'http://bnr-asilomar-0714.herokuapp.com/api/menuitems';

var _data = [{
    name: 'placholder',
    price: '1'
}];
module.exports = {

    getAllNodes: function() {

        // fake caching via intermediary variable
        ActionCreator.receiveAll(_data);

        request.get(URL, function (res){
            _data = res.body;
            ActionCreator.receiveAll(_data);
        });

    }

};