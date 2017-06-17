import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

export default class HomePage extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}>Add</Text>
                    <Text style={styles.toolbarTitle}>This is the title</Text>
                    <Text style={styles.toolbarButton}>Like</Text>
                </View>
                <View style={styles.content}>
                    {/* Top section of two main stats */}
                    <View style={styles.topStats}>
                        <View style={styles.mainStat}>
                            <Text style={styles.count}>89</Text>
                            <Text style={styles.info}>Total Days</Text>
                        </View>
                        <View style={styles.mainStat}>
                            <Text style={styles.count}>89</Text>
                            <Text style={styles.info}>Total Days</Text>
                        </View>
                    </View>

                    {/* Second section, 3 smaller stats */}
                    <View style={styles.secondStats}>
                        <View style={styles.mainStat}>
                            <Text style={styles.count}>$20.50</Text>
                            <Text style={styles.info}>Total Saved</Text>
                        </View>
                        <View style={styles.mainStat}>
                            <Text style={styles.count}>89kg</Text>
                            <Text style={styles.info}>my emissions saved</Text>
                        </View>
                        <View style={styles.mainStat}>
                            <Text style={styles.count}>687kg</Text>
                            <Text style={styles.info}>campus emissions saved</Text>
                        </View>
                    </View>

                    {/* END NEW CODE */}

                </View>
                <View style={styles.content}>
                    {/* Main content section */}
                    <Text>More content </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 50,
        color: '#fff',
        textAlign: 'center'
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1
    },
    mainContainer: {
        flex: 1
    },
    content: {
        backgroundColor: '#ebeef0',
        flex: 1
    },
    topStats: {
        backgroundColor: '#cdd000',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    },
    mainStat: {
        textAlign: 'center'
    },
    count: {
        fontWeight: 'bold'
    },
    secondStats: {
        backgroundColor: '#9999cc',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    }

});
