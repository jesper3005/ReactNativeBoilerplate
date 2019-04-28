import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native'
import MenuButton from '../components/MenuButtons'


export default class HomeScreen extends Component {
    state = { userInfo: [] }

    fetchUser = async () => {
      const url = "https://fenonline.dk/CA3_BACKEND/api/info/user";
      const getHeader = {
          headers: {
              "x-access-token": this.props.superState.token
          }
      };

      const data = await fetch(url, getHeader).then(res => {
          if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | You are not logged in as a User!"); }
          return res.json();
      }).then(data => {
          return data.msg;
      }).catch(error => {
          console.log(error);
          return error.message;
      });

      this.setState({ userInfo: data });
  }

  componentDidMount() {
      this.fetchUser();
  }

  render() { 
    return ( 
      <View style={Styles.container}>
      <MenuButton navigation={this.props.navigation}/>
        <Text style={Styles.text}>
          Profile
        </Text>
        <Text>
          {this.state.userInfo}
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
  