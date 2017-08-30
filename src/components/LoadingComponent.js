import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class ItemComponent extends React.Component {
	render() {
		return (
			<View style={ styles.container }>
				<Text stye={ styles.title }>GoFind!</Text>
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
});