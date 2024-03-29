// FishEcommerceScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FishGrid from './FishGrid';

const FishEcommerceScreen = ({ navigation }) => {
  const fishData = [
    { id: 1, name: 'Fish 1', image: 'https://via.placeholder.com/150', price: 10 },
    { id: 2, name: 'Fish 2', image: 'https://via.placeholder.com/150', price: 20 },
    // Add more fish items as needed
  ];

  const handlePressAddToCart = (item) => {
    console.log('Added to cart:', item);
    // Implement logic to add item to cart
  };

  const handlePressBuyNow = (item) => {
    console.log('Buy now:', item);
    // Implement logic to navigate to checkout or payment screen
    // For example:
    // navigation.navigate('Checkout', { item });
  };

  return (
    <View style={styles.container}>
      <FishGrid
        data={fishData}
        onPressAddToCart={handlePressAddToCart}
        onPressBuyNow={handlePressBuyNow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default FishEcommerceScreen;
