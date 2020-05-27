import React from 'react';

import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class RegForm extends React.Component {
    render() {
        return ( 
            <View style={styles.regForm}>
                
                <Text style={styles.header}>Register</Text>
               
                <TextInput style={styles.textinput} placeholder="First Name" placeholderTextColor = "#EEBB10" />
                <TextInput style={styles.textinput} placeholder="Last Name" placeholderTextColor = "#EEBB10"/>
                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor = "#EEBB10"/>
                <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true} placeholderTextColor = "#EEBB10"/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Create Account</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    regForm:{
        alignSelf: "stretch",
        top: "25%",
        backgroundColor: "#252422"
    },
    header: {
        fontSize: 32,
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
        borderBottomColor: "#fff",
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