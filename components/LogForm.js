import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LogForm extends React.Component{
    render(){
    return(
        <View style={styles.logForm}>
             <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor = "#EEBB10" />
                <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor = "#EEBB10"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Sign in</Text>
                </TouchableOpacity>
        </View>
    )}
}

const styles = StyleSheet.create({
    logForm:{
        alignSelf: "stretch",
        top: 300,
        backgroundColor: "#252422"
    },
    header: {
        fontSize: 24,
        color: "#EEBB10",
    
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    opener:{

        fontWeight: "bold",
        alignSelf:"stretch",
        alignContent:"center",
    },
    textinput:{
        alignSelf: "stretch",
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#EEBB10",
        borderBottomWidth: 1,
        fontSize: 20
    },
    button:{
        alignSelf: "stretch",
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#EEBB10",
        marginTop: 30,
    },
    btntext:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 32
    }
})