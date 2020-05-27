import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Button,  } from 'react-native';

function WelcomeScreen(props) {
    return(
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpeg')}>
            <View style={styles.loginbutton}><Button title="Log in" onPress={console.log("log in")}/></View>
            <View style={styles.signupbutton}><Button title="Sign Up" onPress={console.log("sign up")}/></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
       
        
    },
    loginbutton:{
        width: "100%",
        height: 70,
        backgroundColor: "gold",
        alignContent: "center",
        alignSelf: "center",
        bottom: 220,
        padding: 10,
    },
    signupbutton:{
        width: "100%",
        height: 70,
        backgroundColor: "gold",
        alignContent: "center",
        alignSelf: "center",
        bottom: 200,
        padding: 10,
    }
})

export default WelcomeScreen;