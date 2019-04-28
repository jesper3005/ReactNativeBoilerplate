import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import LinkScreen from '../screens/LinkScreens'
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import MenuDrawer from '../components/MenuDrawer';

//Dimensions is a 
const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer navigation={navigation} />)
    }
}

const DrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    Links: {screen: LinkScreen},
    Profile: {screen: Profile},
    Login: {screen: Login},
},
 DrawerConfig
)

export default createAppContainer(DrawerNavigator)
