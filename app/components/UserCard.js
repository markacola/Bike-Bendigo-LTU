import React from 'react';
import { injectState } from 'freactal';
import { StyleSheet, View, Text } from 'react-native';
import { Thumbnail, Icon } from 'native-base';

export default injectState(UserCard);

function IconStat({ icon, label }) {
  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <Icon style={{ color: 'white' }} name={icon} />
      <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
    </View>
  );
}

function UserCard({
  state: { user: { displayPicture, givenName, familyName } },
}) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Thumbnail size={80} source={{ uri: displayPicture }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white' }}>{givenName} {familyName}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Icon name="md-star" style={{ color: 'yellow', fontSize: 18 }} />
            <Icon name="md-star" style={{ color: 'yellow', fontSize: 18 }} />
            <Icon name="md-star" style={{ color: 'yellow', fontSize: 18 }} />
            <Icon name="md-star" style={{ color: 'white', fontSize: 18 }} />
            <Icon name="md-star" style={{ color: 'white', fontSize: 18 }} />
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <IconStat icon="calendar" label={'72'} />
        <IconStat icon="bicycle" label={'648 km'} />
        <IconStat icon="cash" label={'$398'} />
        <IconStat icon="cloud" label={'460 kg'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
