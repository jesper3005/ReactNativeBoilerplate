import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native'
import MenuButton from '../components/MenuButtons';


export default class LinkScreens extends Component {
    render() { 
      return ( 
        <View style={Styles.container}>
          <MenuButton navigation={this.props.navigation}/>
          <Text style={Styles.text}>
            LinkScreens
          </Text>
        </View>
       );
    }
}

const Styles = StyleSheet.create({
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
  