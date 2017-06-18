import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Link, Switch, Route } from 'react-router-native';

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
        style={{ width: 400, height: 400 }}
        source={require('../assets/images/maps.jpg')}
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
        A brand new bike storage facility has been built under the Education Building with a bike pump, secure swipe-card access, bike parking, CCTV and showers.
      </Text>
      <Image
        style={{ width: 400, height: 267 }}
        source={require('../assets/images/bike-hub.png')}
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
        Fifty-six bike lockers are available in five areas of the campus and are free to hire for Bendigo Student Association Platinum Members or $10 per year for others. A refundable $50 lock deposit also applies. Shower facilities are also provided on campus.
      </Text>
      <Image
        style={{ width: 400, height: 267 }}
        source={require('../assets/images/lockers.png')}
      />
      <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://www.latrobe.edu.au/__data/assets/pdf_file/0003/153192/bendigo-locker-map.pdf')}>
        View the Bendigo bicycle locker and shower location map
      </Text>
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
        your biking journey easier. This includes Showers available throughout the campus.
      </Text>
      <Image
        style={{ width: 400, height: 267 }}
        source={require('../assets/images/showers.png')}
      />
      <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://www.latrobe.edu.au/__data/assets/pdf_file/0003/153192/bendigo-locker-map.pdf')}>
        View the Bendigo bicycle locker and shower location map
      </Text>
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
