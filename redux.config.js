import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { persistStore, persistCombineReducers } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

class ReduxConfig {
    constructor() {

    }

    createStore(reducers) {
        if (!this.store) {
            const persist = {
                key: 'Cache',
                storage: AsyncStorage,
            }

            this.store = createStore(
                persistCombineReducers(persist, reducers),
                applyMiddleware(thunk, logger)
            )

            this.persistor = persistStore(this.store)
        }
        return this.store
    }

    registerComponent(name, Component) {
        const that = this
        AppRegistry.registerComponent(name, () => {
            return class extends React.PureComponent {
                render() {
                    return (
                        <Provider store={that.store}>
                            <PersistGate persistor={that.persistor}>
                                <Component/>
                            </PersistGate>
                        </Provider>
                    )
                }
            }
        })
    }

}

export default new ReduxConfig()
