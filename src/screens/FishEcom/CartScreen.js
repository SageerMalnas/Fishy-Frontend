// CartPage.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = ({ cartItems }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <View style={styles.productImgSection}>
                <Image style={styles.productImg} source={item.image} />
            </View>
            <Text>{item.productName}</Text>
            <Text>Price: ₹ {item.price}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CartScreen;
