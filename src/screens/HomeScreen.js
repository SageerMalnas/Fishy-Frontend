import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Feather from "react-native-vector-icons/Feather";

import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";

import { freeGames, paidGames, sliderData } from "../model/data";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  const titleAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(titleAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [titleAnim]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f8ff", paddingTop: 40 }}>
      <ScrollView style={{ paddingHorizontal: 20  } } isVerticalScrollBarEnabled ={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium"}}>
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
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1d3557",
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
