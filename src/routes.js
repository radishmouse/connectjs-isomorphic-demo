/** @jsx React.DOM */
'use strict';

// Everything begins with routing
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App');
var HelloWorld = require('./components/hello');
var About = require('./components/about');
var Yep = require('./components/yep');

var dev = false;

var routes = (
    <Routes
        location={ dev ? 'hash' : 'history' }
        scrollBehavior="browser"
    >
        <Route name="app" path="/" handler={App}>
            <Route name="yep" handler={Yep}></Route>
            <Route name="about" handler={About}></Route>
            <DefaultRoute handler={HelloWorld}></DefaultRoute>
        </Route>
    </Routes>
);

module.exports = routes;