# Isomorphic JS App example

* Build Tool: Gulp + Browserify
* Module System: Node (CommonJS)
* Static Server: BrowserSync
* Components (Data Flow + Views/Templates): React
* Routing: ReactRouter
* Server Framework: Express 4.x
* (not done) Models/Controllers: (Flux)
    * (what the hell is this app supposed to do?)
    * injecting initial state
    * what if initial data is async?
* (not done)HTTP/XHR: (superagent)
    * proxying /api to a remote service
    * handling auth with remote service on server?

## Dependencies

* Node.js

## Installation

    npm install -g gulp
    npm install

---

## Misc Notes and Questions

* Is writing your app using the Flux architecture the opposite of writing "under the framework"?
    * How portable is your codebase?
* Implications on design
    * the JSX in /src/components lends itself to atomic design
    * after the stack is installed (via `npm install`, BrowserSync provides a way to test your design on multiple devices simultaneously
        * you could use fixture data
        * and one could add automated screenshots
    * you could create prototypes relatively quickly by:
        * serving stubbed out .json files from `/api-static`
        * using lo-fi CSS coupled with pre-built standard components
            * (similar to react-bootstrap)
* How easy is it to do TDD with this style of development? (That is, won't you have to test everything twice to make sure that the server-side rendering and browser rendering of components is the same?)
    * Testing the changes that occur during user interaction is the same.
    * Testing load of deep linking is what needs to be duplicated
    * Otherwise, there are tools (yes, from Facebook) that work well with React/Flux based stack
        * Jest for unit tests
        * [Huxley](https://github.com/facebook/huxley) for visual regression
* What is the payoff after using this complicated setup?
    * The React/Flux stack was designed with scaling development by simplifying the mental model
        * The conventions of your stack are data-flow centric, not object-mutation centric
        * (If you think about an organization, you're focused on what people do, and not what they're called)
    * Likewise, you allow your developers to play to their strengths
        * Back end can build out APIs
        * Front end can focus on performant UIs
            * Per-screen API calls can be aggregated and cached on the Node server
            * Component-based styling lends itself to styleguide driven development
* And what are the tradeoffs?
    * It's not an already established ecosystem (outside of places like Facebook or AirBnB) like Embularbone
        * You can't just it up and build an app with a dozen lines of configuration
        * But, at the same time, there is no magic, no mystery about the way it works.
            * The ecosystem is largey npm
    * Getting the stack set up is tricky
        * There are a few sample projects on github
            * including this one
    * Training? Books?
        * Big Nerd Ranch's Cross-Platform JavaScript Apps course is available

---

# Base setup

## Build Tool

Gulp provides a pipeline style task runner with a small API.
Browserify allows you to create and use Node-style modules in your browser-based JavaScript.

Used in combination, you write simple modules, which are bundled into a single JavaScript payload.

## BrowserSync

A basic `index.html` file will be the base of the application.
BrowserSync will serve it and the bundled JavaScript to the browser, and it
will reload the browser when changes are made to the application code.



# Component based application



# Routing

`ReactRouter` was chosen because it is modeled after Ember's robust routing system.



# Server-Side Rendering

The Express application can compile the components as needed.
The components are rendered to an their HTML representation.

## Rendering the Router component

Routing is duplicated on the server using our custom `ReactRouter` component.
We could not it render on the server the way that regular React components are rendered to HTML.



# Models and Controllers

Flux Stores are used instead of a traditional (mutative) Model layer (such as Backbone.Model).

Dispatchers and Actions replace controllers.


## Rendering Components with initial data

On the server, we inject the initial data for the stores via a global variable.

# HTTP/XHR

---

# Other questions

* Offline
    * How do we handle offline when the router is using the

* Isomorphic Persistence/Caching (PouchDB)
    * Do we risk replicating the remote API?

