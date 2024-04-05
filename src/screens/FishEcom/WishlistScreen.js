import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, Easing,ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon set

const WishlistScreen = ({ navigation, route }) => {
    const [wishlistItems, setWishlistItems] = useState(route.params?.wishlistItems || []);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { removeFromWishlist } = route.params;
    const [animation] = useState(new Animated.Value(0));

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
    const removeFromWishlistHandler = (index) => {
        const updatedWishlistItems = [...wishlistItems];
        updatedWishlistItems.splice(index, 1);
        setWishlistItems(updatedWishlistItems);
        removeFromWishlist(index);
    };

    // Animation function for empty wishlist message
    useEffect(() => {
        animateText();
    }, [wishlistItems]); // Trigger animation when wishlist items change

    const animateText = () => {
        if (wishlistItems.length === 0) {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }).start();
        } else {
            Animated.timing(animation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }).start();
        }
    };

    // Apply animation to text
    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

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
          Hey there 👋🏼
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require("../../assets/images/user-profile.jpg")}
            style={{ width: 45, height: 45 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>
            <Text style={styles.title}>Wishlist Items</Text>
            <ScrollView>
                <View style={styles.itemContainer}>
                    {wishlistItems?.length > 0 ? (
                        wishlistItems?.map((item, index) => (
                            <View key={index} style={styles.wishlistitems}>
                                <TouchableOpacity onPress={() => removeFromWishlistHandler(index)} style={styles.removeIcon}>
                                    <FontAwesome name="trash" size={20} color="#1d3557" />
                                </TouchableOpacity>
                                <View style={styles.productImgSection}>
                                    <Image style={styles.productImg} source={item.image} />
                                </View>
                                <Text style={styles.itemName}>{item.productName}</Text>
                                <Text style={styles.itemPrice}>Price: ₹ {item.price}</Text>
                            </View>
                        ))
                    ) : (
                        <Animated.View style={[styles.emptyCart, { transform: [{ scale }] }]}>
                            <Text style={styles.emptyCartText}>😢 Oops! looks like you don't want anything for your fish</Text>
                        </Animated.View>
                    )}
                </View>
            </ScrollView>

            {/* "Add to Cart" button */}
            {wishlistItems.length > 0 && (
                <TouchableOpacity style={styles.addToCartButton} onPress={addToCartFromWishlist}>
                    <Text style={styles.addToCartButtonText}>Add All to Cart</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f8ff',
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
        backgroundColor: "white",
        position: 'relative', // Add position relative to the parent for absolute positioning
        borderRadius: 10,
        elevation: 3,
    },
    removeIcon: {
        
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
    },
    productImgSection: {
        alignItems: 'center',
    },
    productImg: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 5
    },
    itemName: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    itemPrice: {
        marginTop: 5,
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    emptyCartText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    addToCartButton: {
        backgroundColor: '#1d3557',
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
