import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class RecordRide extends Component {
  render() {
    return (
          <View style={styles.mainContainer}>
          <Text style={styles.header}>I'm Biking to Uni Today</Text>
          <View style={styles.locationSelection}>
            <Text style={styles.label}>Biking from:</Text>
            {/*TODO: These should be pickers, though probably doesn't matter too much if we only have HOME (in top one) and MAIN CAMPUS (in the 2nd one)*/}
            <TextInput style={styles.picker} placeholder='This should be a picker...'></TextInput>
            {/*<Picker style={styles.picker}
              selectedValue='home' mode='dropdown'
              onValueChange={(itemValue, itemIndex) => this.setState({fromLocation: itemValue})}>
              <Picker.Item label="13 Cecil Street, Golden Square" value="home" />
              <Picker.Item label="Main Campus" value="main" />
              <Picker.Item label="Art Institute" value="art" />
            </Picker>*/}
          </View>
           <View style={styles.locationSelection}>
            <Text style={styles.label}>Biking to:</Text>
            <TextInput style={styles.picker} placeholder='This should be a picker...'></TextInput>
            {/*<Picker style={styles.picker}
              selectedValue='main' mode='dropdown'
              onValueChange={(itemValue, itemIndex) => this.setState({toLocation: itemValue})}>
              <Picker.Item label="Main Campus" value="main" />
              <Picker.Item label="Art Institute" value="art" />
            </Picker>*/}
          </View>
          {/*TODO: some binding below if we can */}
          <View style={styles.info}>
            <View style={styles.rowdata}>
              <Text style={styles.rowtitle}></Text>
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
          <Button  title='Confirm Biking to Uni Today'>
          </Button>
          </View>
          </View>
         
    );
  }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding: 10
    },
    header: {
      flex: 10,
      fontSize: 28,
      textAlign: 'center',
      justifyContent: 'center'
    },
    locationSelection: {
      flex: 10,
      flexDirection: 'column'
    },
    label: {
      fontWeight: 'bold',
      height: 20
    },
    picker: {
      backgroundColor: '#cecece',
      height: 30
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
      backgroundColor: '#fdfdfd'
    },
    rowdata: {
      flexDirection: 'row',
      justifyContent: 'justify',
      alignItems: 'stretch',
      alignContent: 'stretch'
    },
    rowtitle: {
      flex: 1,
      textAlign: 'left',
      padding: 10,
      fontSize: 16
    },
    rowitem: {
      flex: 1,
      textAlign: 'right',
      padding: 10,
      fontSize: 16
    },
    rideButton: {
      flex: 40,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      color: '#666',
      fontSize: 12
    }
    
});
