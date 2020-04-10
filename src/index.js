import React from 'react'
import { render } from 'react-dom'

import App from './App'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk'
import getUrls from './actions/getUrls'

const middleWares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleWares))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(getUrls('cat'))
