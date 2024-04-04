import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView, ImageBackground, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CartScreen = ({ route, navigation }) => {
    const [cartItems, setCartItems] = useState(route.params?.cartItems || []);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [animation] = useState(new Animated.Value(0));

    const { removeFromCart } = route.params;

    // Function to remove item from the cart
    const removeFromCartHandler = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        removeFromCart(index);
    };

    // Calculate total price
    useEffect(() => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += parseFloat(item.price);
        });
        // Adding delivery charge (assuming it's ₹50)
        totalPrice += 50;
        setTotalPrice(totalPrice);
    }, [cartItems]);

    // Animation function for empty cart message
    useEffect(() => {
        animateText();
    }, [cartItems]);

    const animateText = () => {
        if (cartItems.length === 0) {
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

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hey there 👋🏼</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <ImageBackground
                        source={require("../../assets/images/user-profile.jpg")}
                        style={styles.profileImage}
                        imageStyle={styles.profileImageStyle}
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
                                <Text style={styles.cashback}>
                                    FREE Delivery by {item.deliveryBy}
                                </Text>
                                <TouchableOpacity onPress={() => removeFromCartHandler(index)} style={styles.removeIcon}>
                                    <FontAwesome name="trash" size={20} color="#1d3557" />
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Animated.View style={[styles.emptyCart, { transform: [{ scale }] }]}>
                            <Text style={styles.emptyCartText}>😢 Oops! looks like you don't want anything for your fish</Text>
                        </Animated.View>
                    )}
                </View>
                <View style={styles.footer}>
                    {cartItems.map((item, index) => (
                        <Text key={index} style={styles.productPrice}>Price for Item {index + 1}: ₹{item.price}</Text>
                    ))}
                    {cartItems.length > 0 && (
                        <Text style={styles.productPrice}>Delivery Charge: + ₹50</Text>
                    )}
                    {cartItems.length > 0 && (
                        <Text style={styles.totalPrice}>Total Price: ₹{totalPrice}</Text>
                    )}
                    {cartItems.length > 0 && (
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.proceedButton}>Proceed to Pay</Text>
                        </TouchableOpacity>
                    )}
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
        backgroundColor: '#f0f8ff',
        marginTop: 50,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    headerText: {
        fontSize: 24,
        fontFamily: "Roboto-Medium",
    },
    profileImage: {
        width: 45,
        height: 45,
    },
    profileImageStyle: {
        borderRadius: 25,
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
        width: '45%',
        marginRight: '5%',
        backgroundColor: "white",
        position: 'relative', // Add position relative to the parent for absolute positioning
        borderRadius: 10,
        elevation: 3,
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
    footer: {
        marginTop: 20,
        alignItems: 'center',
    },
    productPrice: {
        color: '#1d3557',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    totalPrice: {
        color: '#1d3557',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    proceedButton: {
        backgroundColor: '#1d3557',
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
    cashback: {
        fontSize: 9,
        marginVertical: 2,
    },
});

export default CartScreen;
