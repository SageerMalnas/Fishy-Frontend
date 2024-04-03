import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions, // Import Dimensions from 'react-native'
} from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 for fish icon

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const titleAnim = useState(new Animated.Value(-100))[0]; // Change to useState hook

  useEffect(() => {
    Animated.timing(titleAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/unnamed.png")}
      style={[styles.background, { width: "100%", height:"100%" }]} // Adjust the width and height
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent", paddingTop: 40 }}>
        <ScrollView style={{ paddingHorizontal: 20 }} isVerticalScrollBarEnabled={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium" }}>
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

          <View style={styles.container}>
            <Animated.Text
              style={[styles.title, { transform: [{ translateX: titleAnim }] }]}
            >
              Fish Species Identification
            </Animated.Text>
            <Text style={styles.subtitle}>and Disease Detection</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("OpenCamera")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Let's Get Started</Text>
            </TouchableOpacity>
            {/* Add fish icon */}
            <FontAwesome5 name="fish" size={50} color="blue" style={styles.icon} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "black",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1d3557",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    marginTop: 20,
  },
});
