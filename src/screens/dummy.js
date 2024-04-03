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
  Image,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const titleAnim = useState(new Animated.Value(-100))[0];

  useEffect(() => {
    Animated.timing(titleAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/ocean.jpg")}
      style={[styles.background, { width: "100%", height: "100%" }]}
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
              Is your fish healthy ?
            </Animated.Text>
            <Text style={styles.subtitle}>and Disease Detection</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Let's Get Started</Text>
            </TouchableOpacity>
            <FontAwesome5 name="fish" size={50} color="#1d3557" style={styles.icon} />
          </View>

          {/* Image of Betta fish */}
          {/* <Image
            source={require("../../assets/Betta.webp")}
            style={styles.bettaImage}
            resizeMode="cover"
          /> */}
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
  bettaImage: {
    backgroundColor: "white",
    width: "100%",
    height: 200, // Adjust the height as needed
    position: "absolute",
    bottom: 0,
  },
});
