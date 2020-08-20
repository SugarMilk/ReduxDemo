import React, { PureComponent } from 'react'
import { View, TextInput, Button } from 'react-native'
import { addTodo, getCount } from '../actions'
import { connect } from 'react-redux'

class AddTodo extends PureComponent {

  constructor(props) {
    super(props)

    this.inputValue = ''
  }

  render() {
    let { dispatch } = this.props
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            textAlign: 'center',
          }}
          onChangeText={text =>
            this.inputValue = text
          }
        />
        <Button
          title='Add Todo'
          onPress={() => dispatch(addTodo(this.inputValue))}
        />
      </View>
    )
  }

}

export default connect()(AddTodo)
