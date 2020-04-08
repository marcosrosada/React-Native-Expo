import React, { Component } from 'react';
import axios from '../services/api';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'React Native Expo',
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    const response = axios.get('/products');

    console.log(response);
  };

  render() {
    return (
      <View>
        <Text>Página Main</Text>
      </View>
    );
  }
}
