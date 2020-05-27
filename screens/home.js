import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
// import { fullStyles } from '../screens/style';

export default function Home({ navigation }) {
	// props
	const [ reviews, setReviews ] = useState([
		// state with an array of objects
	]);

	// const pressHandler = () => {
	// 	// navigate to host Filter screen
	// 	navigation.push('hostFilter'); // push details screen onto the stack
	// };

	// The renderItem prop is a function which takes an item from the
	// data array and maps it to a React Element. ... Instead of rendering
	// their children prop, FlatList s render each item in their input data
	// using the renderItem prop.

	return (
		<View style={styles.container}>
			<FlatList
				data={reviews} // what data we want to put through to hostDetails
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('hostDetails', item)}>
						<Card>
							<Text>{item.name}</Text>
						</Card>
					</TouchableOpacity>
					/* <Button title="go to host filter" onPress={pressHandler} /> */
				)}
			/>
		</View>
	);
	// renderItem is a function
	// item & data are properties
}

const styles = StyleSheet.create({
	container: {
		padding: 25
	}
});
