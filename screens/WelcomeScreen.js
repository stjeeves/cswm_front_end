import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Button, Image, TouchableOpacity, Text} from 'react-native';

function WelcomeScreen(props) {
    return(
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpeg')}>
            <Image source={require('../assets/logo.png')} style={styles.logocontainer} ></Image>
            <TouchableOpacity style={styles.logbutton}>
                    <Text style={styles.btntext}>Log in</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.signupbutton}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
       
        
    },
    logbutton:{
        width: "100%",
        height: 70,
        backgroundColor: "#EEBB10",
        alignContent: "center",
        alignSelf: "center",
        padding: 10,
        justifyContent: 'flex-end',
        bottom: 10
    },
    signupbutton:{
        width: "100%",
        height: 70,
        backgroundColor: "#EEBB10",
        alignContent: "center",
        alignSelf: "center",
        padding: 10,
    },
    logocontainer:{
        height: 180,
        width: 310,
        top: -400, 
        left: 20,
        
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 32
    }
})

export default WelcomeScreen;