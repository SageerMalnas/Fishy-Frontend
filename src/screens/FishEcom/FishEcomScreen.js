import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import { ProductData } from './ProductData';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons library

const FishEcomScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on search text
  const filteredProducts = ProductData.filter(
    item => item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const addToCart = () => {
    // Implement logic to add item to cart
    console.log('Added to cart:', selectedProduct);
  };

  const addToWishlist = () => {
    // Implement logic to add item to wishlist
    console.log('Added to wishlist:', selectedProduct);
  };

  const buyNow = () => {
    // Implement logic to navigate to checkout or payment screen
    console.log('Buy now:', selectedProduct);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={22} color="#C8C8CB" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search products..."
          placeholderTextColor="#C8C8CB"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {/* Cart Icon */}
      <TouchableOpacity onPress={() => console.log('Go to cart')} style={styles.cartButton}>
        <Ionicons name="cart-outline" size={45} color="#506afa" />
      </TouchableOpacity>

      {/* Product List */}
      <ScrollView>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product size and color.
        </Text>
        {filteredProducts?.length ? (
          filteredProducts.map(item => (
            <TouchableOpacity key={item.id} onPress={() => openProductDetails(item)}>
              <View style={styles.productSection}>
                {/* Product Image */}
                <View style={styles.productImgSection}>
                  <Image style={styles.productImg} source={item.image} />
                </View>
                {/* Product Details */}
                <View style={styles.productDetailSection}>
                  <Text style={styles.sponsored}>Sponsored</Text>
                  <Text style={styles.productName}>{item.productName}</Text>
                  <View style={styles.row}>
                    <Text style={styles.price}>₹ {item.price}</Text>
                    <Text style={styles.mrp}>M.R.P.</Text>
                    <Text style={styles.crossout}>₹ {item.crossOutText}</Text>
                  </View>
                  <Text style={styles.cashback}>
                    Up to 5% cashback with Central Bank Of India Credit Card
                  </Text>
                  <Text style={styles.cashback}>
                    FREE Delivery by {item.deliveryBy}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noResults}>No results found</Text>
        )}
      </ScrollView>

      {/* Product Details Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedProduct !== null}
        onRequestClose={closeProductDetails}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalProductName}>{selectedProduct?.productName}</Text>
            <Image style={styles.modalProductImg} source={selectedProduct?.image} />
            <Text style={styles.modalPrice}>₹ {selectedProduct?.price}</Text>
            <View style={styles.modalButtonsContainer}>
              <Button title="Add to Cart" onPress={addToCart} />
              <Button title="Add to Wishlist" onPress={addToWishlist} />
              <Button title="Buy Now" onPress={buyNow} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white', // Set background color to white
  },
  searchBar: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    width: '80%',
    borderColor: '#5F71E5', // Set border color to #506afa
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black', // Set text color to #506afa
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#506afa', // Set title color to #506afa
  },
  tagline: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 10,
  },
  productSection: {
    borderWidth: 0.2,
    borderColor: '#dddddd',
    flexDirection: 'row',
    borderRadius: 30,
    marginVertical: 10,
    backgroundColor: '#F0F0F0',
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#e0e0e2', // Set background color to #e0e0e2
    justifyContent: 'center',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  sponsored: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    color: '#000000',
  },
  mrp: {
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5,
  },
  crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 2,
  },
  noResults: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  cartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Shadow for Android
  },
  modalProductName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalProductImg: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default FishEcomScreen;