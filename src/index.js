import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import { Provider } from 'react-redux'
// import thunk from 'react-thunk'
// import { logger } from 'redux-logger'
// import rootReducer from './reducers'
//
// import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
//
// const middleware = [thunk]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(logger)
// }
//
// const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
    <App />,
  document.getElementById('root')
)
