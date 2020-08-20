import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
import TodoItem from './TodoItem'

export default class TodoList extends PureComponent {

  renderItem = (data) => {
    let {
      item,
      item: {
        id,
      }
    } = data
    let { toggleTodo } = this.props

    return (
      <TodoItem
        {...item}
        onClick={() => toggleTodo(id)}
      />
    )
  }

  render() {
    let { todos } = this.props
    return (
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={this.renderItem}
      />
    )
  }

}
