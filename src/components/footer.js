/** @jsx React.DOM */
'use strict';


var React = require('react');
var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <p>&copy; 2014 Levi-tato - {this.props.timeStamp}</p>
            </footer>
        );
    }
});

module.exports = Footer;