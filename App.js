import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import DrawerNavigator from './navigation/DrawerNavigator'

export default class App extends Component {
  state = { 
    token: '',
    username: '',
  }
  render() { 
    return ( 
      <View style={Styles.container}>
        <DrawerNavigator superState={this.state}/>
      </View>
     );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
  }
})
