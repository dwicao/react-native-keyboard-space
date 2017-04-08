# react-native-keyboard-space
![demo](https://raw.githubusercontent.com/dwicao/react-native-keyboard-space/master/demo.gif)

## What is this?
  * On iOS, the software keyboard covers the screen by default.
  * This is not desirable if there are `TextInput` near the bottom of the screen - they would be covered by the keyboard and the user cannot see what they are typing.
  * To get around this problem, place a `<KeyboardSpace />` at the bottom of the screen, after your `TextInput`. The keyboard spacer has size 0 and when the keyboard is shown it will grow to the same size as the keyboard, shifting all views above it and therefore making them visible.
  
### How is this different from `KeyboardAvoidingView`?
 * The `KeyboardAvoidingView` doesn't work when used together with a `ScrollView` or `ListView`.

## Running Example
* `git clone https://github.com/dwicao/react-native-keyboard-space.git`
* `cd example`
* `npm install`
* `react-native run-android`

## Installation
* `npm install --save react-native-keyboard-space`

## Basic Usage
```jsx
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import KeyboardSpace from 'react-native-keyboard-space';

class MyExample extends Component {
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
    backgroundColor: 'gray',
  },
});

export default MyExample;
```

## Credits
All credits goes to original author, I just make this repo for easy to use by importing from npm.

## License
MIT

