import React from 'react';
import Expo from 'expo';
import { provideState, injectState } from 'freactal';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import {
  NativeRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-native';
import app from './feathers';

import Home from './screens/Home';
import Login from './screens/Login';
import CampusFacilities from './screens/CampusFacilities';

// set this to something like '/login' to be redirected to the login screen
const DEV_REDIRECT = '';

const withState = provideState({
  initialState: () => ({
    loading: true,
    user: null,
  }),
  effects: {
    setLoading: (_, loading) => s => ({ ...s, loading }),
    setUser: (_, user) => s => ({ ...s, user }),
    getUser: async effects => {
      const jwt = await app.passport.getJWT();
      const payload = await app.passport.verifyJWT(jwt);
      const { userId } = payload;
      const user = await app.service('users').get(userId);
      await effects.setUser(user);
    },
  },
});

@withState
@injectState
class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.props.effects.setLoading(false);
    try {
      await app.authenticate();
      await this.props.effects.getUser();
    } catch (err) {
      console.log('failed to authenticate on mount:', err.message);
      this.props.effects.setUser(false);
    }
  }
  async componentDidMount() {
    app.service('users').on('updated', this.props.effects.setUser);
    app.service('users').on('patched', this.props.effects.setUser);
  }
  async componentWillUnmount() {
    app.service('users').off('updated', this.props.effects.setUser);
    app.service('users').off('patched', this.props.effects.setUser);
  }
  render() {
    const { state: { loading, user } } = this.props;
    if (loading || user == null) {
      return <Spinner />;
    }
    return (
      <Router>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <Switch>
            {DEV_REDIRECT && <Redirect from="/" exact to={DEV_REDIRECT} />}
            <Route path="/login" component={Login} />
            {user === false && <Redirect to="/login" />}
            <Route path="/" exact component={Home} />
            <Route path="/campus-facilities" component={CampusFacilities} />
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: null,
    width: null,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Expo.registerRootComponent(App);
