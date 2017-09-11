import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GenerateButton from './Components/GenerateButton'
import TabBar from './Components/TabBar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const quotes = {
      'quote': 'Welcome to Quiplrr!  To begin, select a Quiplrr bot from the drop-down menu and click generate to witness synthetic text.',
      'source': '- Quiplrr'
    }
    this.state = { quotes }
  }

  updateQuotes(quotes = {quote, source}) {
    this.setState({ quotes })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.paragraph}> {this.state.quotes.quote} </Text>
        <Text style={styles.paragraph}> {this.state.quotes.source} </Text>
        <GenerateButton updateQuotes={this.updateQuotes.bind(this)}/>

        <TabBar />
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
