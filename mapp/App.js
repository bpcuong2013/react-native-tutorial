import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Reducer } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Store from './src/store';

import { Home, NewUser, UserDetail } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1, padding: 0, margin: 0 }}>
          <Router>
            <Scene key="root">
              <Scene key="home" component={Home} title="Home" initial />
              <Scene key="new_user" component={NewUser} title="New User" />
              <Scene key="user_detail" component={UserDetail} title="User Details" />
            </Scene>
          </Router>
        </View>
      </Provider>
    );
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
