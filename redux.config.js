
import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

class ReduxConfig {
  constructor() {

  }

  createStore(reducers) {
    const persistConfig = {
      key: 'Cache',
      storage: AsyncStorage,
    }
    const reducer = persistReducer(persistConfig, combineReducers(reducers))

    this.store = createStore(
      reducer,
      applyMiddleware(thunk, logger),
    )

    this.persistor = persistStore(this.store)

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
              <PersistGate persistor={that.persistor}>
                <Component />
              </PersistGate>
            </Provider>
          )
        }
      }
    })
  }

}

export default new ReduxConfig()
