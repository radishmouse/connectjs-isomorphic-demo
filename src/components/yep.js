/** @jsx React.DOM */
var React = require('react');
var Store = require('../stores/Store');

function getStateFromStore() {
    return {
        data: Store.getAll()
    }
}

var Yep = React.createClass({
    getInitialState: function() {
        return getStateFromStore();
    },

    componentDidMount: function() {
      Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      Store.removeChangeListener(this._onChange);
    },

    render: function () {
        var nodes = Object.keys(this.state.data).map(function (key) {
            var datum = this.state.data[key];
            return (
            <p
                key={datum._id}
                onClick={this._handleClick}
            >
                {datum.name}: {datum.price}
            </p>
            );
        }.bind(this));
        return (
            <div>
                <h1>Yep</h1>
                {nodes}
            </div>

        );
    },


    // _handleClick: function (event) {
    //     debugger;
    //     // this.setState(this.state.data.filter(function (item) {
    //     //     return true;
    //     // }));
    // },
    _onChange: function () {
        this.setState(getStateFromStore());
    }
});

module.exports = Yep;
