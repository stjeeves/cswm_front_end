import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HostList from '../components/hosts/HostList.js';
import { View } from 'react-native';
// import Navigator from './routes/homeStack';

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
            // <Router>
            //     <Switch>
            <View>
                {/* <Route render={(props) => {
                    return <HostList hosts={this.state.hosts} />
                }} /> */}
                <HostList hosts={this.state.hosts}/>
               
            </View>
            //     </Switch>
            // </Router>
        )
    }
}

export default HostContainer;