import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon set

const WishlistScreen = ({ navigation, route }) => {
    const [wishlistItems, setWishlistItems] = useState(route.params?.wishlistItems || []);
    const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Function to add all wishlist items to the cart
  const addToCartFromWishlist = () => {
    // Assuming setCartItems is a function to update the cart items in the parent component
    navigation.navigate('Cart', { cartItems: wishlistItems });
  };

  // Function to delete item from wishlist
  const deleteItem = (index) => {
    const updatedWishlistItems = [...wishlistItems];
    updatedWishlistItems.splice(index, 1);
    setWishlistItems(updatedWishlistItems); // Assuming setWishlistItems is a setter function for updating the wishlistItems state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist Items</Text>
      <View style={styles.itemContainer}>
        {wishlistItems?.length > 0 ? (
          wishlistItems?.map((item, index) => (
            <View key={index} style={styles.wishlistitems}>
              <TouchableOpacity onPress={() => deleteItem(index)} style={styles.removeIcon}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
              <View style={styles.productImgSection}>
                <Image style={styles.productImg} source={item.image} />
              </View>
              <Text style={styles.itemName}>{item.productName}</Text>
              <Text style={styles.itemPrice}>Price: ₹ {item.price}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>Oops ! seems like you don't want anything for your fish !</Text>
        )}
      </View>

      {/* "Add to Cart" button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCartFromWishlist}>
        <Text style={styles.addToCartButtonText}>Add All to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wishlistitems: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '45%',
    marginRight: '5%',
    position: 'relative', // Add position relative to the parent for absolute positioning
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productImgSection: {
    alignItems: 'center',
  },
  productImg: {
    width: 100,
    height: 100,
  },
  itemName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemPrice: {
    marginTop: 5,
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#506afa',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WishlistScreen;
