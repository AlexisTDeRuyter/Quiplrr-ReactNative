import React, { Component } from 'react';
import { Button, View } from 'react-native'

export default class PersonButton extends Component {
  constructor(props) {
    super(props)
    const person = {
      'trumplrr': ['Trump', 'Trumplrr']
    }
    this.state = { person }
  }

  _handleButtonPress = (person) => {
    this.props.checkAnswer(person)
  };

  renderPersonButtons() {
    return this.state.person['trumplrr'].map((person) => {
      return (
        <Button
          title={person}
          onPress={() => this._handleButtonPress(person)}
        />
      )
    })
  }

  render() {
    return (
      <View>
        {this.renderPersonButtons()}
      </View>
    )
  }
}
