// FishGrid.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import FishItem from './FishItem.js';

const FishGrid = ({ data, onPressAddToCart, onPressBuyNow }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <FishItem
          item={item}
          onPressAddToCart={() => onPressAddToCart(item)}
          onPressBuyNow={() => onPressBuyNow(item)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default FishGrid;
