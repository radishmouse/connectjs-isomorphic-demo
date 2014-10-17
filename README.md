# Isomorphic JS App example

* Build Tool: Gulp + Browserify
* Module System: Node (CommonJS)
* Static Server: BrowserSync
* Components (Data Flow + Views/Templates): React
* Routing: ReactRouter
* Server Framework: Express 4.x
* Models/Controllers: (Flux)
* HTTP/XHR: (superagent)

## Dependencies

* Node.js

## Installation

    npm install -g gulp
    npm install

---


# Base setup

## Build Tool

Gulp provides a pipeline style task runner with a small API.

Browserify allows you to create and use Node-style modules in your browser-based JavaScript.

Used in combination, you write simple modules, which are bundled into a single JavaScript payload.

## BrowserSync

A basic `index.html` file will be the base of the application.

BrowserSync will serve it and the bundled JavaScript to the browser, and it will reload the browser when changes are made to the application code.



# Component based application



# Routing

`ReactRouter` was chosen because it is modeled after Ember's robust routing system.



# Server-Side Rendering

The Express application can compile the components as needed.

The components are rendered to an their HTML representation.

## Rendering the Router component

Routing is replicated on the server using the same `ReactRouter` component.

We do not render it on the server the way that regular React components are rendered to HTML.



# Models and Controllers

Flux Stores are used instead of a traditional (mutative) Model layer (such as Backbone.Model).

Controller-Views replace controllers.

Data flow is facilitated via Actions and the Dispatcher.


# HTTP/XHR

superagent is used in WebAPIUtils.js for async.

---

# Other questions

* Offline
    * How do we handle offline when the router is using the history api?

* Isomorphic Persistence/Caching (PouchDB)
    * Do we risk replicating the remote API?

