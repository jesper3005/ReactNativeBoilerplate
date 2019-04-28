import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native'
import MenuButton from '../components/MenuButtons'

export default class HomeScreen extends Component {
    render() { 
      return ( 
        <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
          <Text style={styles.text}>
            HomeScreen
          </Text>
        </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 30,
    }
  })
  
 