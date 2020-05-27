import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
<<<<<<< HEAD
import HostDetails from '../screens/HostDetails';
import Home from '../screens/home';
=======
import HostDetails from '../screens/hostDetails';
import Host from '../components/hosts/Host';
import HostList from '../components/hosts/HostList';
// import Navigator from './routes/homeStack';
import HostContainer from '../containers/HostContainer.js'
>>>>>>> develop


const screens = {
	Home: {
		screen: Host,
		navigationOptions: ({ navigation }) => {
			return {
			headerTitle: () => <Header title='cswm' navigation={navigation} />
			}
		}
	},
	HostContainer: {
		screen: HostContainer,
		navigationOptions: ({ navigation }) =>  {
			title:'HostList'
		}
	},
	Home: {
		screen: Host,
		navigationOptions: ({ navigation }) => {
			return {
			headerTitle: () => <Header title='cswm' navigation={navigation} />
			}
		}
	},
	hostDetails: {
		screen: HostDetails,
		navigationOptions: ({ navigation }) => { 
			title: 'Host Details'
			headerStyle: { backgroundColor: '#eee' }
		}
	},

	HostList: {
		screen:HostList,
		navigationOptions: ({ navigation }) => {
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
