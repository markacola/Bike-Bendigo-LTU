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
  Drawer,
} from 'native-base';
import { Text } from 'react-native';

export default class AppFrame extends Component {
  closeDrawer = () => {
    this.drawer.close();
  };
  openDrawer = () => {
    this.drawer.open();
  };
  render() {
    const { title, children } = this.props;
    return (
      // <Drawer ref={c => this.drawer = c} content={<Text>Sidebar</Text>}>
      (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.openDrawer}>
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
      )
      // </Drawer>
    );
  }
}
