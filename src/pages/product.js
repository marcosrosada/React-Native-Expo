import React from 'react';

import { View } from 'react-native';

const Product = () => <View />;

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title,
});
export default Product;
