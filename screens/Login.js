import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight } from 'react-native'
import MenuButton from '../components/MenuButtons'
import { Form } from 'react-native-elements'


export default class Login extends Component {
  state= { username: '', password: ''}

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    if (name === "username") {
        this.setState({ isBlocking: value.length > 0 });
    }
  }

  handleSubmit = event => {
    const credentials = { username: this.state.username, password: this.state.password };
    this.login(credentials);
    event.preventDefault();
    this.setState({ isBlocking: false });
  }

  login = credentials => {
      const url = "https://fenonline.dk/CA3_BACKEND/api/login";
      const postHeader = {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
      };
      fetch(url, postHeader).then(res => {
          if (!res.ok) { throw Error('Wrong username or password!'); }
          return res.json();
      }).then(data => {
          console.log(data);
          this.props.superState.token = data.token;
          alert("You have succesfully logged in!");
      }).catch(error => alert(error));
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
        <Text style={styles.text}>
          Login
        </Text>
        <TextInput
          name='username'
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableHighlight onPress={this.handleSubmit} style={styles.button}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 850,
    },
    text: {
      fontSize: 30,
      padding: 50,
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#ecf0f1',
      borderRadius: 10
    },
    button: {
      height: 36,
      backgroundColor: '#ecf0f1',
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%'
    },
  })
  