import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';
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
		const context = this;
		const api_address = "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/";
		const settings = {
			"url": "https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/",
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"data": JSON.stringify({img64: dress.data})
		}

		axios(settings).then(function (response) {
			//console.log('Success, ', response.data.data);
			context.setState({
				apiData: response.data.data
			})
		}).catch((error)=> {
			//console.log('Error retrieving data from API', error);
		});
	}

	render() {
		const context = this;
		console.log(context.state.apiData[0])
		let listItems = context.state.apiData.map((item, key)=> {
			return (
				<View key={key}>
					<Text>{ item.price }</Text>
					<Image style={{width: 100, height: 100}} source={{uri: item.chatbot_square_image }}/>
					<View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
				</View>
			);
		});

		if(listItems.length > 0){
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});