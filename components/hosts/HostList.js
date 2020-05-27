import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Card from '../../shared/card';
import Navigator from '../../routes/homeStack';
import { useNavigation } from '@react-navigation/native';

const HostList = (props) => {


    // const navigation = useNavigation();
    // const { navigate } = props.navigation

    if (!props.hosts) {
        console.log(props.hosts)
        return (<Text>Loading.</Text>)
    }

    return (
        <View style={{backgroundColor: '#EEBB10'}}>
            <FlatList 
                data={props.hosts}
                renderItem={({ item }) => <TouchableOpacity onPress={() => 
                    Navigator.navigate('hostDetails', {item})}>
                    <Card>
                        <Text>{item.firstName}</Text>
                        <Text>{item.lastName}</Text> 
                        <Text>{item.tagline}</Text>
                        <Text>{item.rating}</Text>
                    </Card>
                </TouchableOpacity>}     
                  />
        </View> 
    );
}




export default HostList;