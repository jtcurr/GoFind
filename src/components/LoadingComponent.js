import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Component is displayed before data comes back from API
export default class ItemComponent extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<Text style={ styles.title }>GoFind!</Text>
				<Text>
					Loading
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
	}
});