import React, { useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Animated, TouchableOpacity, ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for fish icon

const HomeScreen = ({ navigation }) => {
  const [titleAnimation] = useState(new Animated.Value(-100)); // Initialize animation value

  useEffect(() => {
    // Start title animation when component mounts
    Animated.timing(titleAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/h.webp")}
      style={[styles.background, { width: "100vh", height: "100%" }]}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
            marginBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" ,color:"white"}}>
            Hello Rutuja
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{ width: 45, height: 45 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          {/* Title section */}
          <View style={styles.titleContainer}>
            <Animated.Text style={[styles.title, { transform: [{ translateX: titleAnimation }] }]}>
              Is Your Fish Healthy ?
            </Animated.Text>
            <Text style={styles.subtitle}>Let's find out </Text>
          </View>

          {/* Icon and description section */}
          <View style={styles.infoContainer}>
            <FontAwesome5 name="fish" size={50} color="#1d3557" style={styles.icon} />
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo.
            </Text>
          </View>

          {/* Action button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("OpenCamera")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    // backgroundColor: "#f0f8ff", // Light blue background color
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  titleContainer: {
    
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color:"white",
  },
  subtitle: {
    fontSize: 18,
    color:"white",
    // color: "#1d3557",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#1d3557",
  },
  button: {
    backgroundColor: "#1d3557",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
