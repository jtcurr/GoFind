import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import dress from '../../dress';
import LoadingComponent from './LoadingComponent';
import axios from 'axios';

export default class ListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			apiData: []
		}
	}

	//Retreives data from API before component mounts
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
			console.log('Success, ', response.data.data);
			context.setState({
				apiData: response.data.data
			})
		}).catch((error)=> {
			console.log('Error retrieving data from API', error);
		});
	}

	render() {
		const context = this;
		console.log(context.state.apiData[0])
		let listItems = context.state.apiData.map((item, key)=> {
			return (
				<View key={key}>
					<Text style={{fontWeight:'bold'}}>{ item.price }</Text>
					<Text>{ item.itemName }</Text>
					<Text>{ item.seller }</Text>
					<Image style={{width: 100, height: 100}} source={{uri: item.chatbot_square_image }}/>
					<View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
				</View>
			);
		});
		//Checks to see if data has come back from API
		if(listItems.length > 0){
			return(
				<View style={{ marginTop: 20 }}>{ listItems }</View>
			)
		}
		//Show loading component if data has not arrived yet
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