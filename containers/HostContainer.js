import React, { Component } from 'react';
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HostList from '../components/hosts/HostList.js';
import { View, StyleSheet } from 'react-native';
=======
import { View, FlatList, TouchableOpacity, Text} from 'react-native';
import Card from '../shared/card';
// import Navigator from './routes/homeStack';
>>>>>>> develop

class HostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hosts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/hosts"

        fetch(url)
            .then(res => res.json())
            .then(host => this.setState({
                hosts: host
            }))
    }

    render() {
        return (
            <View style={{ backgroundColor: '#EEBB10' }}>
                <FlatList
                    data={this.state.hosts}
                    renderItem={({ item }) => <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('hostDetails', { item })}>
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
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default HostContainer;