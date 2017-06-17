import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Link } from 'react-router-native';
import { Constants } from 'expo';

import Screen from '../components/Screen';

export default function CampusFacilities() {
  return <Screen title="Campus Facilities">

      <View style={styles.container}>
       <Link to"/maps">
          <Button
            title="Maps"
          />
        </Link>
        <Link to"/bike-hub">
           <Button
             title="Bike Hub"
           />
        </Link>
        <Link to"/bike-lockers">
           <Button
             title="Bike Lockers"
           />
        </Link>
        <Link to"/showers">
           <Button
             title="Showers"
           />
        </Link>
            
      </View>
    );
  }
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

  </Screen>;
}
