import React from 'react';
import { withRouter } from 'react-router-native';
import { Text } from 'react-native';
import { Container, Content, ListItem, Left, Body, Icon } from 'native-base';
import UserCard from './UserCard';

const MenuItem = withRouter(function MenuItem({
  history,
  onPress,
  icon,
  to,
  label,
}) {
  return (
    <ListItem
      icon
      onPress={() => {
        onPress();
        history.push(to);
      }}>
      <Left>
        <Icon style={{ color: 'white' }} name={icon} />
      </Left>
      <Body>
        <Text style={{ color: 'white' }}>{label}</Text>
      </Body>
    </ListItem>
  );
});

export default function Sidebar({ onClose }) {
  return (
    <Container>
      <Content
        bounces={false}
        style={{ flex: 1, backgroundColor: '#2196F3', top: -1 }}>
        <UserCard />
        <MenuItem
          icon="calendar"
          to="/history-and-stats"
          label="History & Stats"
          onPress={onClose}
        />
        <MenuItem
          icon="map"
          to="/campus-facilities"
          label="Campus Facilities"
          onPress={onClose}
        />
        <MenuItem
          icon="list-box"
          to="/campus-facilities"
          label="Events"
          onPress={onClose}
        />
        <MenuItem
          icon="information-circle"
          to="/tips-and-info"
          label="Tips and Info"
          onPress={onClose}
        />
        <MenuItem
          icon="settings"
          to="/setting"
          label="Setting"
          onPress={onClose}
        />
      </Content>
    </Container>
  );
}
