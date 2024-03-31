// FishItem.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FishItem = ({ item, onPressAddToCart, onPressBuyNow }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={onPressAddToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressBuyNow}>
        <Text>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default FishItem;
