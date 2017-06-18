import React, { Component } from 'react';
import { injectState } from 'freactal';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Picker,
} from 'react-native';
import { Constants } from 'expo';
import app from '../feathers';

const campusLocations = [
  {
    label: 'Latrobe',
    location: {
      type: 'Point',
      coordinates: [-37.7216243, 145.0485135],
    },
  },
];
// TODO: move this to config
const apiKey = 'AIzaSyCjEMbiBvfGBn3TUntCDdyWzBqnwmlRArg';

@injectState
export default class RecordRide extends Component {
  state = {
    fromLocation: null,
    toLocation: null,
  };
  calculateDistance = async (from, to) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?mode=bicycling&origins=${from.coordinates.join(
        ',',
      )}&destinations=${to.coordinates.join(',')}&apiKey=${apiKey}`,
    );
    const { status, rows } = await response.json();
    if (status !== 'OK' || rows.length === 0) {
      throw new Error('Unable apply distancematrix.');
    }
    const [
      { elements: [{ distance: { value: distance = 0 } = {} } = {}] = [] } = {},
    ] = rows;
    return distance;
  };
  recordRide = async () => {
    const { fromLocation: from, toLocation: to } = this.state;
    const distance = await this.calculateDistance(from, to);
    await app.service('users').patch({
      $push: {
        rides: {
          from,
          to,
          distance,
        },
      },
    });
  };
  render() {
    const { state: { user } } = this.props;
    const { fromLocation, toLocation } = this.state;
    const locations = [...user.addresses, ...campusLocations];
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.header}>I'm Biking to Uni Today</Text>
        <View style={styles.locationSelection}>
          <Text style={styles.label}>Biking from:</Text>
          <Picker
            style={styles.picker}
            selectedValue={fromLocation}
            mode="dropdown"
            onValueChange={fromLocation => this.setState({ fromLocation })}>
            {locations.map(({ label, location }, i) =>
              <Picker.Item key={i} label={label} value={location} />,
            )}
          </Picker>
        </View>
        <View style={styles.locationSelection}>
          <Text style={styles.label}>Biking to:</Text>
          <Picker
            style={styles.picker}
            selectedValue={toLocation}
            mode="dropdown"
            onValueChange={toLocation => this.setState({ toLocation })}>
            {locations.map(({ label, location }, i) =>
              <Picker.Item key={i} label={label} value={location} />,
            )}
          </Picker>
        </View>
        {/*TODO: some binding below if we can */}
        <View style={styles.info}>
          <View style={styles.rowdata}>
            <Text style={styles.rowtitle} />
            <Text style={[styles.rowitem, styles.title]}>This Ride</Text>
            <Text style={[styles.rowitem, styles.title]}>Month Total</Text>
          </View>
          <View style={styles.rowdata}>
            <Text style={styles.rowtitle}>$ saved</Text>
            <Text style={styles.rowitem}>$7.54</Text>
            <Text style={styles.rowitem}>$65.50</Text>
          </View>
          <View style={styles.rowdata}>
            <Text style={styles.rowtitle}>CO2 saved</Text>
            <Text style={styles.rowitem}>12kg</Text>
            <Text style={styles.rowitem}>76kg</Text>
          </View>
          <View style={styles.rowdata}>
            <Text style={styles.rowtitle}>kms</Text>
            <Text style={styles.rowitem}>8.4km</Text>
            <Text style={styles.rowitem}>128km</Text>
          </View>
        </View>
        <View style={styles.rideButton}>
          <Button
            onPress={this.recordRide}
            title="Confirm Biking to Uni Today"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 10,
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'center',
  },
  locationSelection: {
    flex: 10,
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    height: 20,
  },
  picker: {
    backgroundColor: '#cecece',
    height: 30,
  },
  info: {
    flex: 30,
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dfdfdf',
    backgroundColor: '#fdfdfd',
  },
  rowdata: {
    flexDirection: 'row',
    justifyContent: 'justify',
    alignItems: 'stretch',
    alignContent: 'stretch',
  },
  rowtitle: {
    flex: 1,
    textAlign: 'left',
    padding: 10,
    fontSize: 16,
  },
  rowitem: {
    flex: 1,
    textAlign: 'right',
    padding: 10,
    fontSize: 16,
  },
  rideButton: {
    flex: 40,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#666',
    fontSize: 12,
  },
});
