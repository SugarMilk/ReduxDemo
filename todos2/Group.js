import React, { PureComponent } from 'react'
import { View } from 'react-native'

import ConnectCount from './containers/ConnectCount'

export default class Group extends PureComponent {

  render() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 44,
        }}
      >
        <ConnectCount />
      </View>
    )
  }

}
