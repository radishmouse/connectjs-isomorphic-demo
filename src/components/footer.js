/** @jsx React.DOM */
'use strict';


var React = require('react');

/*
    The <p> tag will always re-render when the static bundle.js
    attaches to the DOM. Because the contents at the time of
    attachment is different from the time of static rendering.
*/
var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <p>&copy; 2014 @radishmouse: {this.props.timeStamp}</p>
            </footer>
        );
    }
});

module.exports = Footer;