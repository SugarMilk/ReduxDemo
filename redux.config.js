import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { persistStore, persistCombineReducers } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const SDK_MODEL_SET = 'sdk.model.set'

class ReduxConfig {
    constructor() {

    }

    createStore(reducers) {
        if (!this.store) {
            const config = {
                key: 'Cache',
                storage: AsyncStorage,
            }

            const model = (state = {}, action) => {
                const { type, name, prop, value } = action
                switch (type) {
                    case SDK_MODEL_SET:
                        let props = {...state[name]}
                        props[prop] = value
                        return {
                            ...state, [name]: {...props}
                        }
                    default:
                        return state
                }
            }

            this.store = createStore(
                persistCombineReducers(config, {...reducers, model}),
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
        const action = (name, prop, value) => ({
            type: SDK_MODEL_SET,
            name, prop, value,
        })

        const handler = (name) => ({
            set: (target, prop, value) => {
                this.store.dispatch(action(name, prop, value))
                Reflect.set(target, prop, value)
            },
            get: (target, prop) => {
                let model = this.store.getState().model
                let value = model && model[name] && model[name][prop]
                return value || Reflect.get(target, prop)
            }
        })

        return new Proxy(instance, handler(name))
    }

}

export default new ReduxConfig()
