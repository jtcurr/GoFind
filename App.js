import React from 'react';
import { StyleSheet } from 'react-native';

import ListComponent from './src/components/ListComponent';

export default class App extends React.Component {

  render() {
    return (
      <ListComponent />
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
