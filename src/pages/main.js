import React, { Component } from "react";
import axios from "../services/api";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: "React Native Expo"
  };

  state = {
    products: [],
    productInfo: {
      page: 1,
      pages: 2,
      total: 15,
      limit: 10
    }
  };
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await axios.get(`/products?_page=${page}&_limit=10`);

    this.setState({ products: [...this.state.products, ...response.data] });
  };

  loadMore = () => {
    const { productInfo } = this.state;

    if (productInfo.page === productInfo.pages) return;

    this.loadProducts((productInfo.page += 1));
  };

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { products } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={products}
          keyExtractor={item => "" + item.id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  list: {
    padding: 20
  },

  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  productButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
});
