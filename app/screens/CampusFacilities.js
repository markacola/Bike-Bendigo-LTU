import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Link } from 'react-router-native';
import { Constants } from 'expo';

import Screen from '../components/Screen';

export default function CampusFacilities() {
  return (
    <Screen title="Campus Facilities">
      <Switch>
        <Route path="/campus-facilities/maps" component={Maps} />
        <Route path="/campus-facilities/bike-hub" component={BikeHub} />
        <Route path="/campus-facilities/bike-lockers" component={BikeLockers} />
        <Route path="/campus-facilities/showers" component={Showers} />
        <Route
          render={() =>
            <View style={styles.container}>
              <Link to="/campus-facilities/maps">
                <Button title="Maps" />
              </Link>
              <Link to="/campus-facilities/bike-hub">
                <Button title="Bike Hub" />
              </Link>
              <Link to="/campus-facilities/bike-lockers">
                <Button title="Bike Lockers" />
              </Link>
              <Link to="/campus-facilities/showers">
                <Button title="Showers" />
              </Link>
            </View>}
        />
      </Switch>
    </Screen>
  );
}

function Maps() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Maps
      </Text>
      <Text style={styles.paragraph}>
        The Bendigo Latrobe University Campus has plenty of resources to make
        your biking journey easier.
      </Text>
      <Image
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
        style={{ height: 400, width: 300 }}
      />
    </View>
  );
}

function BikeHub() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bike Hub
      </Text>
      <Text style={styles.paragraph}>
        Located just under the library the Bendigo Latrobe University Campus is
        host to our very own Bike Hub. With a bike pump, secure bike racks,
        lockers and shower facilities this is everything you need for your bike
        travels right here on campus.
      </Text>
      <Image
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
        style={{ height: 400, width: 300 }}
      />
    </View>
  );
}

function BikeLockers() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Bike Lockers
      </Text>
      <Text style={styles.paragraph}>
        The Bendigo Latrobe University Campus has plenty of resources to make
        your biking journey easier. This includes lockers available at the
        highlighted locations below.
      </Text>
      <Image
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
        style={{ height: 400, width: 300 }}
      />
    </View>
  );
}

function Showers() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Shower Facilities
      </Text>
      <Text style={styles.paragraph}>
        The Bendigo Latrobe University Campus has plenty of resources to make
        your biking journey easier. This includes lockers available at the
        highlighted locations below.
      </Text>
      <Image
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
        style={{ height: 400, width: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: '#ecf0f1',
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#ecf0f1',
  },
  heading: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
