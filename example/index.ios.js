import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import KeyboardSpace from './KeyboardSpace';

export default class sparkClick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {[...Array(50)].map((_, index) => (
            <Text key={index}>
              {index} This is ScrollView
            </Text>
          ))}
        </ScrollView>
        <TextInput style={styles.textInput}/>
        <KeyboardSpace />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textInput: {
    height: 50,
    width: 400,
    backgroundColor: 'gray'
  },
});

AppRegistry.registerComponent('sparkClick', () => sparkClick);
