import React, { Component } from 'react';
import { injectState } from 'freactal';
import { withRouter } from 'react-router-native';
import { Constants } from 'expo';
import {
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Picker,
} from 'react-native';
import { Button } from 'native-base';

import app from '../feathers';
// TODO: move this to config
const apiKey = 'AIzaSyCjEMbiBvfGBn3TUntCDdyWzBqnwmlRArg';

@injectState
@withRouter
export default class ProfilePage extends Component {
  state = this.getInitialState();
  getInitialState() {
    const {
      addresses: [{ address = '', location } = {}] = [],
    } = this.props.state.user;
    return {
      address,
      location,
    };
  }
  async geoCodeAddress(address) {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?region=au&address=${address}&apiKey=${apiKey}`,
    );
    const { status, results } = await response.json();
    if (status !== 'OK' || results.length === 0) {
      throw new Error('Unable to geocode address.');
    }
    const [{ geometry }] = results;
    return {
      type: 'Point',
      coordinates: [geometry.location.lng, geometry.location.lat],
    };
  }
  handleUpdateAddress = async () => {
    const { state: { user } } = this.props;
    const { address } = this.state;
    // TODO: update to allow editing of multiple addresses
    await app.service('users').patch(user._id, {
      addresses: [
        {
          address,
          location: await this.geoCodeAddress(address),
        },
      ],
    });
  };
  handleUpdateDepartment = async department => {
    const { state: { user } } = this.props;
    await app.service('users').patch(user._id, { department });
  };
  handleUpdateRidingLevel = async ridingLevel => {
    const { state: { user } } = this.props;
    await app.service('users').patch(user._id, { ridingLevel });
  };
  handleUpdateRidingGoal = async ridingGoal => {
    const { state: { user } } = this.props;
    await app.service('users').patch(user._id, { ridingGoal });
  };
  render() {
    const {
      state: {
        user: {
          displayPicture,
          givenName,
          familyName,
          department,
          ridingLevel,
          ridingGoal,
        },
      },
      effects: { setUser },
    } = this.props;
    const { address } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.icon}
            source={{
              uri: displayPicture,
            }}
          />
          <Text style={styles.name}>
            {givenName} {familyName}
          </Text>
        </View>
        <View style={styles.fieldSet}>
          <View><Text style={styles.label}>Home Address</Text></View>
          <View>
            <TextInput
              blurOnSubmit
              style={styles.data}
              value={address}
              placeholder="Enter your address..."
              onChangeText={address => this.setState({ address })}
              onSubmitEditing={this.handleUpdateAddress}
            />
          </View>
          <View>
            <Text style={styles.info}>
              Your home address is used to estimate ride distances
            </Text>
          </View>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.label}>Department</Text>
          <Picker
            style={styles.data}
            selectedValue={department}
            onValueChange={this.handleUpdateDepartment}>
            <Picker.Item label="Computer Science" value="Computer Science" />
            <Picker.Item label="Outdoor Education" value="Outdoor Education" />
            <Picker.Item label="Arts" value="Arts" />
            <Picker.Item label="Business" value="Business" />
            <Picker.Item label="Nursing" value="Nursing" />
            <Picker.Item label="Law" value="Law" />
            <Picker.Item label="Engineering" value="Engineering" />
          </Picker>
          <Text style={styles.info}>
            Compete with other departments at uni
          </Text>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.label}>Current Riding Level</Text>
          <Picker
            style={styles.data}
            selectedValue={ridingLevel}
            onValueChange={this.handleUpdateRidingLevel}>
            <Picker.Item label="1 time per week" value={1} />
            <Picker.Item label="2 time per week" value={2} />
            <Picker.Item label="3 time per week" value={3} />
            <Picker.Item label="4 time per week" value={4} />
            <Picker.Item label="5 time per week" value={5} />
            <Picker.Item label="6 time per week" value={6} />
            <Picker.Item label="7 time per week" value={7} />
          </Picker>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.label}>Biking Goals</Text>
          <Picker
            style={styles.data}
            selectedValue={ridingGoal}
            onValueChange={this.handleUpdateRidingGoal}>
            <Picker.Item label="1 time per week" value={1} />
            <Picker.Item label="2 time per week" value={2} />
            <Picker.Item label="3 time per week" value={3} />
            <Picker.Item label="4 time per week" value={4} />
            <Picker.Item label="5 time per week" value={5} />
            <Picker.Item label="6 time per week" value={6} />
            <Picker.Item label="7 time per week" value={7} />
          </Picker>
          <Text style={styles.info}>
            Prizes awarded each semester to those achieving their goals
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            style={{ width: '100%' }}
            onPress={async () => {
              await setUser(false);
              await app.logout();
            }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  profile: {
    flex: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  dataFields: {
    flex: 60,
  },
  icon: {
    flex: 4,
    borderRadius: 50,
    width: 90,
    height: 100,
    resizeMode: 'cover',
  },
  name: {
    flex: 8,
    fontSize: 36,
    marginLeft: 20,
    marginTop: -20,
  },
  fieldSet: {
    height: 84,
    padding: 10,
  },
  label: {
    height: 15,
    marginBottom: 4,
    fontSize: 13,
    color: '#444',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  data: {
    height: 40,
    backgroundColor: '#ededed',
    paddingLeft: 10,
  },
  info: {
    fontSize: 11,
    height: 13,
    color: '#999',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
