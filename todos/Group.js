import React, { PureComponent } from 'react'
import { View } from 'react-native'

import Filters from './components/Filters'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

export default class Group extends PureComponent {

  render() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 44,
        }}
      >
        <AddTodo />
        <Filters />
        <VisibleTodoList />
      </View>
    )
  }

}
