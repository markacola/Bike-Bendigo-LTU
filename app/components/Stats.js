import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

export default class Rankings extends Component {
  render() {
    return (
          <View style={styles.mainContainer}>
            <Image style={{height: 220, width: 300, marginLeft: 20, textAlign: 'center', flex: 1 }} source={{uri:'https://turncode-my.sharepoint.com/personal/marcus_turncode_productions/_layouts/15/guestaccess.aspx?docid=106d0cfed3e4945c4ab887d6c7084f8a2&authkey=ARVfUaQrYsGtRnBS99LOzAo'}} />
            <View style={styles.topList}>
             <View style={styles.topListItem}>
              <Text style={[styles.deptName, styles.header]}>Department</Text>
              <Text style={[styles.count, styles.header]}>Rides</Text>
              
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Computer Science</Text>
                <Text style={styles.count}>276</Text>
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Law</Text>
                <Text style={styles.count}>250</Text>
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Outdoor Education</Text>
                <Text style={styles.count}>120</Text>
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Arts</Text>
                <Text style={styles.count}>108</Text>
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Nursing</Text>
                <Text style={styles.count}>89</Text>
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Social Studies</Text>
                <Text style={styles.count}>54</Text>
              </View>
              <View style={styles.topListItem}>
                <Text style={styles.deptName}>Engineering</Text>
                <Text style={styles.count}>0</Text>
              </View>
            </View>
          
          </View>
         
    );
  }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding: 10,
        textAlign: 'center',
        alignContents: 'center',
        justifyContent: 'space-between'
    },
    topList: {
      flex: 3,
      paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }, 
      topListItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
      }, 
      deptName: {
        flex: 8,
        padding: 5,
        fontSize: 16
      },
      count: {
        flex: 2,
        padding: 5,
        fontSize: 16
      },
      header: {
        fontWeight: 'bold',
        backgroundColor: '#2196f3',
        color: '#fff'
      },
      footer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
});
