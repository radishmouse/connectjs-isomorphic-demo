/** @jsx React.DOM */
'use strict';

var Nav = require('./nav');

var React = require('react');
var Header = React.createClass({
    render: function () {
        return (
            <Nav />
        );
    }
});

module.exports = Header;

