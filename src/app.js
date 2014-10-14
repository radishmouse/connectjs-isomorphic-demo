/** @jsx React.DOM */
var React = require('react');

var Header = require('./components/header');
var Footer = require('./components/footer');
var HelloWorld = require('./components/hello');


var App = React.createClass({
    _timeStamp: function () {
        return (new Date()).getTime();
    },
    render: function () {
        return (
            <section>
                <Header />
                <HelloWorld />
                <p>{this._timeStamp()}</p>
                <Footer />
            </section>
        );
    }
});

module.exports = App;