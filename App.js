import React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListComponent from './src/components/ListComponent';
import ItemComponent from './src/components/ItemComponent';
import LoadingComponent from './src/components/LoadingComponent';

export default class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <LoadingComponent />
    )
  }
}

const GoFindApp = StackNavigator ({
  Home: { screen: App}
})

AppRegistry.registerComponent('GoFindApp', () => GoFindApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
