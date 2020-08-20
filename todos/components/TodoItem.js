import React, { PureComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class TodoItem extends PureComponent {

  render() {
    let { text, completed, onClick } = this.props
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          flex: 1,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eee',
          marginTop: 10,
        }}
        onPress={onClick}>
        <Text
          style={{
            textDecorationLine: completed ? 'line-through' : 'none'
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }

}
