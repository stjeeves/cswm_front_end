import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import Card from '../shared/card';

// getParam get the object from the host object and its keys
export default function HostDetails({ navigation }) {
	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={styles.profileContainer} >

				<Image style={styles.profilepic} source={require('../assets/background.jpeg')}/>
				</View>
		<View style={styles.container}>
			<Card style={{backgroundColor: '#EEBB10'}}>
				
				<Text style={styles.hostinfo} >Jamie</Text>
				<Text style={styles.hostinfo}>blah bnlah blah</Text>
				<Text style={styles.hostinfo} >I like rollies</Text>
				{/* <Text> {navigation.getParam('name')}</Text> */}
				{/* <Text> {navigation.getParam('about')}</Text> */}
				{/* <Text> {navigation.getParam('rating')}</Text> */}
				
					<Image style={styles.stars} source={require('../assets/Star_rating_5_of_5.png')} />
				
			</Card>
		</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		paddingTop: 175,
		
	},
	rating:{
		flex: 1,
		width: '100%'
	},
	stars:{
		width: 300,
		height: 50,
		left: 18,
		top: 10
	},
	profilepic:{
		justifyContent: 'flex-start',
		height: 400,
		width: '100%'
	},
	profileContainer:{
		width: '100%', 
		height: '30%'
	},
	hostinfo:{
		color: '#EEBB10',
		fontSize: 20
	}
	}
);

/* <Button title="back home" onPress={pressHandler} />;

const pressHandler = () => {
	navigation.goBack(); // pops a screen off the stack
}; */
