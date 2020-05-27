import React from 'react';
import { View, StyleSheet } from 'react-native';

import Filter from '../components/Filter.js';

export default function FilterScreen(props) {
	return (
		<View style={styles.container}>
			<Text> this is text</Text>
			<Filter />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColour: '#252422'
	}
});
