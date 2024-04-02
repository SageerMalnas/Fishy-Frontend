import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView ,ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import Navbar from '../../Navbar';

const CartScreen = ({ route ,navigation}) => {
  const [cartItems, setCartItems] = useState(route.params?.cartItems || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(route.params?.totalPrice || 0);
  // Function to calculate total price including delivery charges
  // Function to calculate total price including delivery charges
  const calculateTotalPrice = () => {

    const deliveryCharge = 50; // Assuming delivery charge is ₹50
    const productPrice = cartItems.reduce((total, item) => total + (item.price), 0);
    const totalPrice = parseFloat((productPrice + deliveryCharge));
    return totalPrice;
  };


  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Function to remove item from the cart
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    // const updatedCartItems = cartItems.filter((cartItems) => cartItems.id !== index.id);
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>
          Hello Rutuja
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require("../../assets/images/user-profile.jpg")}
            style={{ width: 45, height: 45 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Your Cart Items</Text>
      <ScrollView>
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
          {cartItems.map((item, index) => (
            <Text key={index} style={styles.productPrice}>Price for Item {index + 1}: ₹{item.price}</Text>
          ))}
          {cartItems.length > 0 && (
            <Text style={styles.productPrice}>Delivery Charge: + ₹50</Text>
          )}
          {
            cartItems.length > 0 && (
              <Text style={styles.totalPrice}>Total Price: ₹{totalPrice}</Text>
            )
          }
          {
            cartItems.length > 0 && (
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.proceedButton}>Proceed to Pay</Text>
              </TouchableOpacity>
            )
          }

        </View>
      </ScrollView>


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
  productPrice: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalPrice: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  proceedButton: {
    backgroundColor: '#506afa',
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
