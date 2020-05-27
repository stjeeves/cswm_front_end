import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckboxFormX from 'react-native-checkbox-form';
// import Slider from '@react-native-community/slider'

const MusicData = [
	{
		label: 'Rock',
		value: 'one'
	},
	{
		label: 'Techno',
		value: 'two'
	},
	{
		label: 'Chart',
		value: 'three'
	},
	{
		label: 'Hip Hop',
		value: 'four'
	},
	{
		label: 'R&B',
		value: 'five'
	},
	{
		label: 'Live',
		value: 'six'
	},
	{
		label: 'Jazz',
		value: 'seven'
	},
	{
		label: 'Punk',
		value: 'eight'
	},
	{
		label: 'Other',
		value: 'nine'
	}
];
const VenueData = [
	{
		label: 'Pubs',
		value: 'one'
	},
	{
		label: 'Club',
		value: 'two'
	},
	{
		label: 'Live Music',
		value: 'three'
	},
	{
		label: 'Other',
		value: 'four'
	}
];
const DrinkData = [
	{
		label: 'Cocktails',
		value: 'one'
	},
	{
		label: 'Whisky',
		value: 'two'
	},
	{
		label: 'Wine',
		value: 'three'
	},
	{
		label: 'Craft Beer',
		value: 'four'
	},
	{
		label: 'Spirits',
		value: 'five'
	}
];
const PriceData = [
	{
		label: 'Cheap',
		value: 'one'
	},
	{
		label: 'Average',
		value: 'two'
	},
	{
		label: 'Expensive',
		value: 'three'
	}
];

export default class PRNRadioForm extends Component {
	_onSelect = (item) => {
		console.log(item);
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={{ marginVertical: 10, backgroundColor: '#E7E7E7' }}>
					<Text>Music</Text>
					<CheckboxFormX
						style={{ width: 420 - 30 }}
						dataSource={MusicData}
						itemShowKey="label"
						itemCheckedKey="RNchecked"
						iconSize={16}
						formHorizontal={true}
						labelHorizontal={false}
						onChecked={(item) => this._onSelect(item)}
					/>
					<Text>Venue</Text>
					<CheckboxFormX
						style={{ width: 350 - 30 }}
						dataSource={VenueData}
						itemShowKey="label"
						itemCheckedKey="RNchecked"
						iconSize={16}
						formHorizontal={true}
						labelHorizontal={false}
						onChecked={(item) => this._onSelect(item)}
					/>
					<Text>Drink</Text>
					<CheckboxFormX
						style={{ width: 350 - 30 }}
						dataSource={DrinkData}
						itemShowKey="label"
						itemCheckedKey="RNchecked"
						iconSize={16}
						formHorizontal={true}
						labelHorizontal={false}
						onChecked={(item) => this._onSelect(item)}
					/>
					<Text>Price</Text>
					<CheckboxFormX
						style={{ width: 350 - 30 }}
						dataSource={PriceData}
						itemShowKey="label"
						itemCheckedKey="RNchecked"
						iconSize={16}
						formHorizontal={true}
						labelHorizontal={false}
						onChecked={(item) => this._onSelect(item)}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0a0b0f'
	}
});
