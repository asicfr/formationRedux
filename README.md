<h1 align="center">react</h1>
<p align="center">starter for isomorphic apps</p>

- **100%** ES6/ES7 using Babel 6
- **100%** isomorphic — page is rendered server side for initial load
- Use [React](https://github.com/facebook/react), [Redux](https://github.com/rackt/redux), [react-router](https://github.com/rackt/react-router) and [redial](https://github.com/markdalgleish/redial) for data-fetching
- Fully linted, with large amount of [eslint](https://github.com/eslint/eslint) rules
- Happy developer experience:
  - Client hot reloading for **components**, **styles**, **actions** and **reducers**
  - Out-of-the-box support of 
    - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
  - Ready to use build system, with assets renaming and optimizations
  - Ready to test with [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme)
  - Following best practices with :
    -  [immutablejs](https://facebook.github.io/immutable-js/)
    -  [lodash-fp](https://github.com/lodash/lodash/wiki/FP-Guide)
    -  [recompose](https://github.com/acdlite/recompose)
    -  [reselect](https://github.com/reactjs/reselect)
- adapted for Visual Studio Code and the following plugins :
  - ESLint par Dirk Baeumer
  - Htmlhint par Mike Kaufman
  - Sass Lint


### Usage

Clean the dev environment:

```
npm clean
OR
yarn clean
```

Clean the dev environment for windows:

```
npm cleanwin
OR
yarn cleanwin
```

Launch the dev environment:

```
npm start
OR
yarn start
```

Launch the build for windows:

```
npm run buildwin
OR
yarn run buildwin
```

Launch the build:

```
npm run build
OR
yarn run build
```

Launch the app in prod mode for windows:

```
npm run prodwin
OR
yarn run prodwin
```

Launch the app in prod mode:

```
npm run prod
OR
yarn run prod
```

Launch the app in prod mode with custom properties:

```
APP_PROPERTIES_PATH=/tmp/application.json npm run prod
OR
APP_PROPERTIES_PATH=/tmp/application.json yarn run prod
```

Launch the app in prod mode with custom logs folder:

```
LOG_PATH=/tmp/logs npm run prod
OR
LOG_PATH=/tmp/logs yarn run prod
```

Launch the tests:

```
npm test
OR
yarn test
```

### Structure

    .
    ├── assembly/
    │   └── targz-assembly.xml - tar.gz packaging configuration for maven
    ├── bin/
    │   ├── build.js - webpack build using nodejs API https://webpack.github.io/docs/node.js-api.html
    │   ├── pm2.js - start a server with pm2 (http://pm2.keymetrics.io/docs/usage/cluster-mode/)
    │   └── start.js - start a server (call src/server/index.js)
    ├── src/
    │   ├── actions/ - Redux actions http://redux.js.org/docs/basics/Actions.html
    │   ├── assets/ - Images, Videos, ...
    │   ├── components/ - React components https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    │   └── middlewares/ - Redux middlewares http://redux.js.org/docs/api/applyMiddleware.html
    │       └── dev-tools.js - Redux Debug Tools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
    │   ├── reducers/ - Redux reducers http://redux.js.org/docs/basics/Reducers.html
    │   └── server/ - Express Server
    │       ├── index.js - Init server
    │       ├── render.js - isomorphic middleware
    │       └── webpack.js - webpack middleware
    │   ├── services/ - Service layer (business logic, api, ...)
    │   ├── styles/ - Stylesheets
    │   ├── client.js - webpack entry point
    │   ├── configuration.js - Trick to externalize configuration (Not yet perfect. Must retry to use new webpack.DefinePlugin for that ...)
    │   ├── routes.js - React router https://github.com/reactjs/react-router
    │   └── store.js - Redux store init http://redux.js.org/docs/api/Store.html
    ├── tests/ - folder for unit tests, follow the same substructure as src
    │   ├── components/ - tests of React components
    │   ├── ...
    │   └── state-functions.test.js - example of unit test on a component
    ├── webpack/
    │   ├── config.js - webpack default configuration
    │   ├── development.js - webpack configuration for development
    │   └── production.js - webpack configuration for production
    ├── application.json - Application configuration
    ├── jsconfig.json - options for the features provided by the JavaScript language service
    ├── npmrc - npm config
    ├── package.json - Application dependencies
    ├── pom.xml - maven project definition
    └── process.json - pm2 configuration


### Dependencies

compression
---

Compression middleware

express
---
Fast, unopinionated, minimalist web framework

jwt-decode
---

Decode JWT tokens, mostly useful for browser applications.

lodash, lodash-fp, recompose, reselect and immutablejs
---

utilities

react
---

React is a JavaScript library for building user interfaces

react-bootstrap
---

Bootstrap 3 components built with React

react-dom
---

react-router-bootstrap
---

Integration between React Router and React-Bootstrap

react-router
---

A complete routing library for React

react-router-redux
---

Sync browser history with a redux store

redial
---

Universal data fetching and route lifecycle management for React etc (https://www.npmjs.com/package/redial#example-server-usage)

redux
---

Predictable state container for JavaScript apps

redux-actions
---

Flux Standard Action (FSA) utilities for Redux.


redux-thunk
---

Thunk middleware for Redux (http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)

superagent
---

SuperAgent is a small progressive client-side HTTP request library, and Node.js module with the same API, sporting many high-level HTTP client features


app-module-path
---

Simple module to add additional directories to the Node module search for top-level app modules

Exemple without app-module-path
  
    import Home from './components/Home' 
  
Exemple without app-module-path
  
    import Home from 'components/Home'


autoprefixer
---

Postcss plugin. Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website

babel-preset-*
---

Set of babel plugins (http://babeljs.io/docs/plugins/)

babel-register
---

The require hook will bind itself to node's require and automatically compile files on the fly.

*-loader
---
webpack loaders (https://webpack.github.io/docs/loaders.html)
