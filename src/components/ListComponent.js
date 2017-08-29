import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import base64Img from 'base64Img';

export class ListComponent extends React.Component {

	componentDidMount() {

		base64Img.base64('../dress.jpg', function(err, data) {
			if(err) {
				console.log('Error retrieving imgage', err);
				}
			}
			else {
				console.log('Data successfully found', data);
				const config = {
					method: 'POST',
					send: JSON.stringify(data)
				}
			}
		});
	}
}