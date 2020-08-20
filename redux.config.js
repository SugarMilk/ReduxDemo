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
        let that = this
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

    storeProxy(instance, name) {
        const handler = (name) => {
            return {
                set: (target, prop, value) => {
                    Reflect.set(target, prop, value)
                    this.store.dispatch(Action(name, prop, value))
                },
                get: (target, prop) => {
                    Reflect.get(target, prop)
                    return this.store.getState()[name][prop]
                }
            }
        }
        return new Proxy(instance, handler(name))
    }

}

export default new ReduxConfig()
