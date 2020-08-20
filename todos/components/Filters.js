import React, { PureComponent } from 'react'
import { View } from 'react-native'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../Define'

export default class Filters extends PureComponent {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}
      >
        <FilterLink filter={SHOW_ALL} />
        <FilterLink filter={SHOW_ACTIVE} />
        <FilterLink filter={SHOW_COMPLETED} />
      </View>
    )
  }

}
