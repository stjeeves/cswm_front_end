import React, { Component } from 'react';
import { View, StyleSheet, Text, Slider } from 'react-native';

export default class PrefSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 5 };
	}
	render() {
		return (
			<View style={styles.container}>
				<Slider
					style={{ width: 300 }}
					value={this.value}
					minimumValue={0}
					maximumValue={10}
					step={1}
					// onValueChange={(val) => this.setState({ value: val })}
					// onSlidingComplete={(val) => this.getVal(val)}
				/>
				<Text>Value: </Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: { flex: 1, alignItems: 'stretch', justifyContent: 'center' }
});
