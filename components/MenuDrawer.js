import React, { Component } from 'react';
import {
    Platform,
    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class MenuDrawer extends Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50}} onPress={() => {this.props.navigation.navigate(nav)}}>
                <Text styles={styles.link}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }

    render() { 
        return ( 
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            {/* <View style={styles.imgView}>
                                <Image style={styles.image} source={require('../assets/defaultportrait.jpg')}/>
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}></Text>

                            </View> */}
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLink('Home', 'Home')}
                        {this.navLink('Profile', 'Profile')}
                        {this.navLink('Login', 'Login')}
                    </View>
                </ScrollView>
                    <View style={styles.footer}> 
                        <Text style={styles.description}>ReactNative Boilerplate</Text>
                        <Text style={styles.version}>v1.0</Text>
                    </View>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        fontSize: 30
    },
    scrollView: {
        flex: 1,
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    imgView: {
        flex: 3,
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20,
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    link: {
        flex: 1,
        fontSize: 40,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    topLinks: {
        height: 160,
        backgroundColor: 'black',
    },
    bottomLinks: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 450,
        fontSize: 30,
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'grey',
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 14,
    }
})
 