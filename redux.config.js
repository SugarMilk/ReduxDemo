
import React from 'react'
import { AppRegistry } from 'react-native'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

class ReduxConfig {
  constructor() {

  }

  createStore(reducers) {
    this.store = this.store || createStore(
      combineReducers(reducers),
      applyMiddleware(thunk, logger),
    )

    this.store.subscribe(() => {
      console.log('hj', this.store.getState());
    })
  }

  registerComponent(name, Component) {
    const that = this
    AppRegistry.registerComponent(name, () => {
      return class extends React.PureComponent {
        render() {
          return (
            <Provider store={that.store}>
              <Component />
            </Provider>
          )
        }
      }
    })
  }

}

export default new ReduxConfig()
