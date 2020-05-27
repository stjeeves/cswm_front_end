import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HostDetails from '../screens/hostDetails';
import Home from '../screens/home';

// npm install react navigation-stack
// createStatckNavigator fuction used to create stack navigator

// Home screen & hostDetails screen are configured in this navigator

// this stack navigator offers a header
// the navigation property
const screens = {
	// WelcomeScreen: {
	// 	screen: Home,
	// 	navigationOptions: {
	// 		title: 'CSWM'
	// 	}
	// },
	Home: {
		// when using the navigator on this option
		screen: Home, // it takes you to this screen
		navigationOptions: {
			title: 'CSWM'
			// headerStyle: { backgroundColor: '#eee' }
		}
	},
	hostDetails: {
		// when using the navigator on this option
		screen: HostDetails, // it takes you to this screen
		navigationOptions: {
			title: 'Host Details'
			// headerStyle: { backgroundColor: '#eee' }
		}
	}
};

// each key value pair configures each screen

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: { backgroundColor: '#eee', height: 90 }
	}
});
// stack navigator is stored inside HomeStack

export default createAppContainer(HomeStack);
// APP container returns a component we can render the navigation stack

// stackNavigator comes with a built in header with functionality "BACK"
