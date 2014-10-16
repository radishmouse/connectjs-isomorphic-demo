/** @jsx React.DOM */
var React = require('react');
var Header = require('./components/header');
var Footer = require('./components/footer');
var WebAPIUtils = require('./utils/WebAPIUtils');

var App = React.createClass({

    componentDidMount: function () {
        WebAPIUtils.getAllNodes();
    },
    render: function () {
        return (
            <section>
                <Header />
                {/* equivalent to Ember's {{outlet}} */}
                <this.props.activeRouteHandler/>
                <Footer timeStamp={this._timeStamp()}/>
            </section>
        );
    },
    _timeStamp: function () {
        return (new Date()).getTime();
    }
});
module.exports = App;