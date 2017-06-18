import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class HomePage extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContent}>
          <View style={styles.topStats}>
            <View style={styles.mainStat}>
              <Text style={styles.count}>13</Text>
              <Text style={styles.info}>days ridden</Text>
            </View>
            <View style={styles.mainStat}>
              <Text style={styles.count}>64</Text>
              <Text style={styles.info}>kms ridden</Text>
            </View>
          </View>

          <View style={styles.secondStats}>
            <View style={styles.secondaryStat}>
              <Text style={[styles.count, styles.secondaryStat]}>$20.50</Text>
              <Text style={styles.info}>saved on petrol</Text>
            </View>
            <View style={styles.secondaryStat}>
              <Text style={[styles.count, styles.secondaryStat]}>89kg</Text>
              <Text style={styles.info}>my emissions saved</Text>
            </View>
            <View style={styles.secondaryStat}>
              <Text style={[styles.count, styles.secondaryStat]}>687kg</Text>
              <Text style={styles.info}>campus emissions saved</Text>
            </View>
          </View>

          <View style={styles.todaysTip}>
            <Text style={styles.tipText}>
              If you bike to Uni today you will save $3.80 in petrol.  If you bike all week, that's an extra $19 to spend on beer!
                    </Text>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.todaysInfo}>
            <Text style={styles.todaysInfoText}>Hey Jack, your facebook friend Jenny Delaney is biking today!</Text>
          </View>
          <View style={styles.logRide}>
            <Button title="I'm biking today" backgroundColor='#2196f3'></Button>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  topContent: {
    flex: 2
  },
  bottomContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  topStats: {
    flexDirection: 'row',
    flex: 0.8,
    justifyContent: 'space-around',
    marginTop: 25
  },
  mainStat: {
    textAlign: 'center'
  },
  count: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50
  },
  secondStats: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'space-around',
    marginBottom: 20
  },
  secondaryStat: {
    textAlign: 'center',
    fontSize: 20,
    width: 90
  },
  info: {
    textAlign: 'center',
    color: '#444'
  },
  todaysTip: {
    backgroundColor: '#bb285c',
    flex: 0.8,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  tipText: {
    color: "#fff",
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  todaysInfo: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 25
  },
  todaysInfoText: {
    textAlign: 'center',
    paddingLeft: 13,
    paddingRight: 13
  },
  logRide: {
    flex: 1,
    justifyContent: 'flex-start'
  }

});

