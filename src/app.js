/** @jsx React.DOM */
var React = require('react');

var Header = require('./components/header');
var Footer = require('./components/footer');

var App = React.createClass({
    _timeStamp: function () {
        return (new Date()).getTime();
    },
    render: function () {
        return (
            <section>
                <Header />

                {/* equivalent to Ember's {{outlet}} */}
                <this.props.activeRouteHandler/>

                <Footer />
            </section>
        );
    }
});

module.exports = App;