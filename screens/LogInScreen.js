import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { ImageBackground, StyleSheet, View, Button,  } from 'react-native';
import RegForm from '../components/RegForm.js';
import LogForm from '../components/LogForm.js'

export default function LogInScreen(props){ 
    return(
            <View>
                <LogForm/>
            </View>
        
    )}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
       
        
    },
    loginbutton:{
        width: "70%",
        height: 70,
        backgroundColor: "gold",
        alignContent: "center",
        alignSelf: "center",
        bottom: 220,
        padding: 10,
    },
    signupbutton:{
        width: "70%",
        height: 70,
        backgroundColor: "gold",
        alignContent: "center",
        alignSelf: "center",
        bottom: 200,
        padding: 10,
    }
})

