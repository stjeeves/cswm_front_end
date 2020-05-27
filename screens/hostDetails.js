import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/card';

// getParam get the object from the host object and its keys
export default function hostDetails({ navigation }) {
	return (
		<View style={styles.container}>
			<Card>
				<Text> {navigation.getParam('name')}</Text>
				<Text> {navigation.getParam('about')}</Text>
				<Text> {navigation.getParam('rating')}</Text>
				<View style={styles.rating}>
					<Image source={require('../assets/Star_rating_1_of_5.png')} />
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({});

/* <Button title="back home" onPress={pressHandler} />;

const pressHandler = () => {
	navigation.goBack(); // pops a screen off the stack
}; */
