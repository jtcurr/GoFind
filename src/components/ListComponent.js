import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import dress from '../../dress';

export default class ListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			apiData: 'treats'
		}
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<Text>{ this.state.apiData }</Text>
		)
	}
}