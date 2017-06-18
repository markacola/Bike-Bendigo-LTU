import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { Constants } from 'expo';

export default class ProfilePage extends Component {
    render() {
        return (
            /* TODO: wire up the TextInput fields below, profile image from facebook and name text....if we have time. */
            <View style={styles.mainContainer}>
                <View style={styles.profile}>
                    <Image style={styles.icon} source={{ uri: 'https://unagb.files.wordpress.com/2015/11/grizzly-bear2.jpg' }} />
                    <Text style={styles.name}>
                        Jack Rider
                    </Text>
                </View>
                <View style={styles.dataFields}>
                    <View style={styles.fieldSet}>
                        <View><Text style={styles.label}>Home Address</Text></View>
                        <View><TextInput style={styles.data} placeholder="13 Cecil Street, Golden Square" onChangeText={(text) => this.setState({ text })} /></View>
                        <View><Text style={styles.info}>Your home address is used to estimate ride distances</Text>
                        </View></View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.label}>Department</Text>
                        <TextInput style={styles.data} placeholder="Computer Science" onChangeText={(text) => this.setState({ text })} />
                        <Text style={styles.info}>Compete with other departments at uni</Text>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.label}>Current Riding Level</Text>
                        <TextInput style={styles.data} placeholder="Casual" onChangeText={(text) => this.setState({ text })} />
                        <Text style={styles.info}></Text>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.label}>Biking Goals</Text>
                        <TextInput style={styles.data} placeholder="1 day per week" onChangeText={(text) => this.setState({ text })} />
                        <Text style={styles.info}>Prizes awarded each semester to those achieving their goals</Text>
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
    profile: {
        flex: 10,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    dataFields: {
        flex: 60
    },
    icon: {
        flex: 4,
        borderRadius: 50,
        width: 90,
        height: 100,
        resizeMode: 'cover'
    },
    name: {
        flex: 8,
        fontSize: 36,
        marginLeft: 20,
        marginTop: -20
    },
    fieldSet: {
        height: 84,
        padding: 10
    },
    label: {
        height: 15,
        marginBottom: 4,
        fontSize: '13',
        color: '#444',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    data: {
        height: 40,
        backgroundColor: '#ededed',
        paddingLeft: 10
    },
    info: {
        fontSize: '11',
        height: 13,
        color: '#999',
        fontStyle: 'italic',
        textAlign: 'right'
    },

});
