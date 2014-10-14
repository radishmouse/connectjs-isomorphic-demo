/** @jsx React.DOM */
'use strict';


var React = require('react');
var Nav = React.createClass({
    render: function () {
        return (
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        );
    }
});

module.exports = Nav;