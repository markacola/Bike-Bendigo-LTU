import React, { Component } from 'react';
import Expo from 'expo';
import { injectState } from 'freactal';
import { Dimensions, View, Text } from 'react-native';
import { Button } from 'native-base';
import app from '../feathers';

const { width, height } = Dimensions.get('window');

@injectState
class Login extends Component {
  login = async () => {
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('829419417206171', {
      permissions: ['public_profile'],
    });
    if (type !== 'success') return;
    try {
      await app.authenticate({
        strategy: 'facebook',
        access_token: token,
      });
      await this.props.effects.getUser();
    } catch (err) {
      console.error('failed to login with access token:', err.message);
      app.logout();
    }
  };
  render() {
    return (
      <View
        style={{
          width,
          height,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button onPress={this.login}>
          <Text>Login with Facebook</Text>
        </Button>
      </View>
    );
  }
}

export default Login;
