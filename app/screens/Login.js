import React, { Component } from 'react';
import Expo, { Constants } from 'expo';
import { injectState } from 'freactal';
import { Dimensions, View, Text, Image, StyleSheet, Button } from 'react-native';
//import { Button } from 'native-base';
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
          <Image
              style={{width: 300, height: 300}}
              source={require('../assets/images/bbltu-logo-trans.png')}
          />
        <Button onPress={this.login} title="Login with Facebook" style={styles}>
          <Text>Login with Facebook</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#34495e',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ecf0f1',
    },
});

export default Login;
