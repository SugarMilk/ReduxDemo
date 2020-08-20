/**
 * @format
 */



// import TodoApp from './todos/App'
// import reducers from './todos/reducers'

import TodoApp from './todos2/App'
import reducers from './todos2/reducers'

import ReduxConfig from './redux.config'

ReduxConfig.createStore(reducers)
ReduxConfig.registerComponent('ReduxDemo', TodoApp)
