import React, { Component } from 'react';
import axios from '../services/api';

import { View, Text, FlatList } from 'react-native';

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

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  render() {
    const { products } = this.state;

    return (
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => '' + item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
