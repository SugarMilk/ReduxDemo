import React, { PureComponent } from 'react'
import { View, Text, Button } from 'react-native'
import { getCount } from '../actions'

export default class Count extends PureComponent {

  constructor(props) {
    super(props)

  }

  render() {
    let { onClick, count } = this.props
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text>{`数量：${count}`}</Text>
        <Button
          title='获取'
          onPress={onClick}
        />
      </View>
    )
  }

}
