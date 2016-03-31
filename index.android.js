/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';

var Firebase = require('firebase');

class devdactic_react extends Component {
  construct(props) {
    super(propos);
    var myFirebaseRef = new Firebase('https://resplendent-fire-5136.firebaseio.com')

    myFirebaseRef.set({
      title: 'Hello world"',
      autho: 'Horecio'
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Horecio Araújo Dias
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('devdactic_react', () => devdactic_react);
