import React, { Component } from 'react';
import { Button } from 'react-native'

export default class GenerateButton extends Component {
  constructor(props) {
    super(props)
  }

  _handleButtonPress = () => {
    fetch('http://www.quiplrr.com/quiplrr?source=trumplrr',{
      headers: {
        Accept: 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => this.props.updateQuotes(responseJson))
    .catch(e => console.log('error', e))
  };

  render() {
    return (
      <Button
        title='Generate'
        onPress={this._handleButtonPress}
        />
    )
  }
}
