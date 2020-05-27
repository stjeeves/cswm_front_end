import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HostDetails from '../screens/hostDetails';
import Host from '../components/hosts/Host';
import HostList from '../components/hosts/HostList';
// import Navigator from './routes/homeStack';

const screens = {
	Home: {
		screen: Host,
		navigationOptions: {
			title: 'CSWM'
		}
	},
	hostDetails: {
		screen: HostDetails,
		navigationOptions: {
			title: 'Host Details',
			headerStyle: { backgroundColor: '#eee' }
		}
	},

	HostList: {
		screen: HostList,
		navigationOptions: {
			title:'HostList'
		}
	}
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: { backgroundColor: '#eee', height: 90 }
	}
});

export default createAppContainer(HomeStack);
