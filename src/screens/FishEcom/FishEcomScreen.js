import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { ProductData } from './ProductData';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons library


const FishEcomScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Filter products based on search text
  const filteredProducts = ProductData.filter(
    item => item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product) => {
    // Add the selected product to the cart
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
    setSelectedProduct(null); // Close the product details modal after adding to cart
  };

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
    console.log('Wishlist items:', wishlistItems); // Add this line
    setSelectedProduct(null);
  };

  const openCartItems = () => {
    // Navigate to the cart screen
    navigation.navigate('Cart', { cartItems, updateCartItems: setCartItems });
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
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
      {/* Search Bar */}

      <View style={styles.searchBar}>
        <Ionicons name="search" size={22} color="#C6C6C6" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search products..."
          placeholderTextColor="#C8C8CB"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {/* Cart and Wishlist Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openCartItems} style={styles.cartIcon}>
          <Ionicons name="cart-outline" size={30} color="#506afa" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist', { wishlistItems })} style={styles.wishlistIcon}>
          <Ionicons name="heart-outline" size={30} color="#506afa" />
        </TouchableOpacity>
      </View>

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
              <TouchableOpacity style={styles.button} onPress={() => addToCart(selectedProduct)}>
                <Ionicons name="cart-outline" size={20} color="#fff" />
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => addToWishlist(selectedProduct)}>
                <Ionicons name="heart-outline" size={20} color="#fff" />
                <Text style={styles.buttonText}>Add to Wishlist</Text>
              </TouchableOpacity>
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
    padding: 20,
    backgroundColor: "#f0f8ff",
    paddingTop: 50,
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
    width: '100%',
    borderColor: '#C6C6C6', // Set border color to #506afa
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
    // borderWidth: 0.2,
    // borderColor: '#dddddd',
    // borderRadius: 30,
    // marginVertical: 10,
    // backgroundColor: "white",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff", // White background color for each shop card
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 3, // Add elevation for shadow effect
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#e0e0e2',
    justifyContent: 'center',
    alignItems: 'center', // Center the image within its container
    backgroundColor:"white"
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  productImg: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5, // Ensure the entire image fits within its container
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: '#1d3557'
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cartIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistIcon: {
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    backgroundColor: '#506afa',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default FishEcomScreen;
