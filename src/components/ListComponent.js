import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import dress from '../../dress';
import LoadingComponent from './LoadingComponent';
const axios = require('axios');

export default class ListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			apiData: []
		}
	}

	componentWillMount() {
		const api_address = "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/";
		var settings = {
			"url": "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/",
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"data": JSON.stringify({img64: dress.data})
		}

		axios(settings).then(function (response) {
			console.log(response);
		});
}

	onButtonPress() {
		
	}

	render() {
		let listItems = this.state.apiData.map(function(item, key) {
			return (
				<TouchableHighlight key={key} style={styles.row} onPress={this.onButtonPress.bind(this)}>
					<Text>{ item.data.title }</Text>
				</TouchableHighlight>
			);
		});
		if(this.state.apiData.length > 0){
			return(
				<View>{ listItems }</View>
			)
		}
		else {
			return(
				<LoadingComponent />
			)
		}
	}
}