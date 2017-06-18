import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Content,
} from 'native-base';
import { Text } from 'react-native';
import Drawer from 'react-native-drawer';
import Sidebar from './Sidebar';

export default class Screen extends Component {
  state = { menuOpen: false };
  closeDrawer = () => {
    this.setState({ menuOpen: false });
  };
  openDrawer = () => {
    this.setState({ menuOpen: true });
  };
  render() {
    const { title, children } = this.props;
    const { menuOpen, mainOverlayOpacity } = this.state;
    return (
      <Drawer
        tapToClose
        open={menuOpen}
        openDrawerOffset={0.2}
        content={<Sidebar onClose={this.closeDrawer} />}
        onClose={this.closeDrawer}
        styles={{
          mainOverlay: {
            backgroundColor: menuOpen ? 'rgba(0,0,0,0.5)' : 'transparent',
          },
        }}>
        <Container>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() =>
                  menuOpen ? this.closeDrawer() : this.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>{title}</Title>
            </Body>
            <Right />
          </Header>
          <Content style={{ flexGrow: 1 }}>
            {children}
          </Content>
        </Container>
      </Drawer>
    );
  }
}
