import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon set
import { unloadAllAsync } from 'expo-font';

const CartScreen = ({ route }) => {
  const [cartItems, setCartItems] = useState(route.params?.cartItems || []);  
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to calculate total price including delivery charges
  const calculateTotalPrice = () => {
    const deliveryCharge = 50; // Assuming delivery charge is ₹50
    const productPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return productPrice + deliveryCharge;
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Function to remove item from the cart
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    // Update the state with the new cart items
    // You would typically use a state management library like Redux to manage state across components
    // For simplicity, I'm assuming cartItems is managed by the parent component and passed as props
    // This function should also update the cartItems in the database or storage
    console.log("Item removed:", updatedCartItems[index]);
    setCartItems(updatedCartItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart Items</Text>
      <View style={styles.itemContainer}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <View style={styles.productImgSection}>
                <Image style={styles.productImg} source={item.image} />
              </View>
              <Text style={styles.itemName}>{item.productName}</Text>
              <Text style={styles.itemPrice}>Price: ₹ {item.price}</Text>
              <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeIcon}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>Oops! Seems like you don't want anything for your fish!</Text>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.priceDetails}>Product Price: ₹{cartItems.reduce((total, item) => total + (item.price * item.quantity), 1)}</Text>
        <Text style={styles.priceDetails}>Delivery Charge: ₹50</Text>
        <Text style={styles.totalPrice}>Total Price: ₹{calculateTotalPrice()}</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.proceedButton}>Proceed to Pay</Text>
        </TouchableOpacity>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Item is placed!</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
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
  cartItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '45%', // Adjust width as needed for grid layout
    marginRight: '5%', // Adjust margin as needed for grid layout
    position: 'relative', // Add position relative to the parent for absolute positioning
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
  removeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  emptyCart: {
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  priceDetails: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalPrice: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  proceedButton: {
    backgroundColor: '#FC8F00',
    fontSize: 20,
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 18,
    color: '#FC8F00',
  },
});

export default CartScreen;
