// ProductDetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = () => {
    // Send the selected product to the CartScreen
    navigation.navigate('Cart', { cartItems: [product] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.productName}</Text>
      <Image style={styles.productImg} source={product.image} />
      <Text style={styles.productPrice}>Price: ₹ {product.price}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImg: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  productPrice: {
    fontSize: 18,
    marginTop: 10,
  },
  addToCartButton: {
    marginTop: 20,
    backgroundColor: '#506afa',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
