import React from 'react';
import Host from './Host';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Card from '../../shared/card';

const HostList = (props) => {

    if (!props.hosts) {
        console.log(props.hosts)
        return (<Text>Loading.</Text>)
    }

    return (
        <SafeAreaView>
            <FlatList data={props.hosts}
                renderItem={({ item }) =>
                
                    <View style={{ backgroundColor: 'gold' }}>
                        <Card>
                            <Text>{item.firstName}</Text>
                            <Text>{item.lastName}</Text>
                        </Card>
                    </View>
                } />
        </SafeAreaView>

    )
}




export default HostList;