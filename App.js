import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PersonButton from './Components/PersonButton'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'quote': '', 'source': '', 'is_real_sentence': '', 'result': ''}
    this.getQuote()
  }

  getQuote(){
    return (
      fetch('http://www.quiplrr.com/quiplrr/games/generate?source=trumplrr',{
        headers: {
          Accept: 'application/json'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 'quote': responseJson['quote'], 'source': responseJson['source'], 'is_real_sentence': responseJson['is_real_sentence'] })
      })
      .catch(e => console.log('error', e))
    )
  }

  checkAnswer(person) {
    answerKey = {
      'Trump': true,
      'Trumplrr': false
    }
    if (this.state.is_real_sentence === answerKey[person]) {
      result = 'Correct!'
    } else {
      result = 'Incorrect!'
    }
    this.getQuote()
    this.setState({ result })
  }

  updateQuotes(quote, source, is_real_sentence) {
    this.setState({ quote, source, is_real_sentence })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}> {this.state.result} </Text>
        <Text style={styles.paragraph}> {this.state.quote} </Text>
        <PersonButton updateQuotes={this.updateQuotes.bind(this)} checkAnswer={this.checkAnswer.bind(this)}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF444F',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
