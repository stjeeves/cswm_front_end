import React from 'react';
import { View, Text } from 'react-native';
// import Navigator from '../../routes/homeStack';

const Host = (props) => {
    if (!props.host) {
        return "Loading..."
    }
    console.dir(props)
    return (
        <View>
            <Text>{props.host.firstName}</Text>
            <Text>{props.host.lastName}</Text>
            <Text>{props.host.tagline}</Text>
        </View>
    )
}

export default Host;