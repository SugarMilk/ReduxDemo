import React, { PureComponent } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class Link extends PureComponent {

  render() {
    let { active, filter, onClick } = this.props
    return (
      <TouchableOpacity
        style={{
          marginLeft: 4,
          height: 40,
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onClick}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: active ? '#000' : '#ccc',
          }}
        >{filter}</Text>
      </TouchableOpacity>
    )
  }

}
