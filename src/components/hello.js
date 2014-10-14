/** @jsx React.DOM */
'use strict';


var React = require('react');
var HelloWorld = React.createClass({
    getInitialState: function () {
        return {
            _message: 'Hello, World!'
        };
    },
    _changeMessage: function () {
        return /Hello/.test(this.state._message) ?
            this.setState({_message: 'Goodbye, World!!!'})
            :
            this.setState({_message: 'Hello, World!'});
    },
    render: function () {
        return (
            <h1 onClick={this._changeMessage}>{this.state._message}</h1>
        );
    }
});

module.exports = HelloWorld;
