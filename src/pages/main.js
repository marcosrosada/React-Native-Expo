import React, { Component } from 'react';
import axios from '../services/api';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'React Native Expo',
  };

  state = {
    products: [],
  };
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await axios.get('/products');

    this.setState({ products: response.data });
  };

  render() {
    const { products } = this.state;

    return (
      <View>
        <Text>Página Main {products.length}</Text>
        {products.map((product) => (
          <Text>{product.title}</Text>
        ))}
      </View>
    );
  }
}
