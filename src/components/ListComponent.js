import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import dress from '../../dress';
const axios = require('axios');

export default class ListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			apiData: []
		}
	}

	componentWillMount() {
		const send = {img64: dress.data};
		const api_address = "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/";
		axios.post(api_address, {
			body: JSON.stringify(send),
			headers: {"Content-Type":"application/json"} 
		}).then((response)=> {
			this.setState({
				apiData: response
			})
			console.log('response', response)
		}).catch((error)=> {
			console.log('error', error)
		})
	}

	onButtonPress() {
		this.props.navigator.push()
	}

	render() {
		let listItems = this.state.apiData.map(function(item, key) {
			return (
				<TouchableHighlight key={key} style={styles.row} onPress={this.onButtonPress.bind(this)}>
					<Text>{ item.data.title }</Text>
				</TouchableHighlight>
			);
		});
		if(this.state.apiData.length > 0) {
			return(
				<View>{ listItems }</View>
			)
		}
		else {
			return (
				<Text>Loading data...</Text>
			)
		}
	}
}