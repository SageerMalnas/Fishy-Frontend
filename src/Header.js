// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        marginBottom: 20,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontFamily: "Roboto-Medium", color: "white" }}>
        Hey there 👋🏼
      </Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <ImageBackground
          source={require("./assets/images/user-profile.jpg")}
          style={{ width: 45, height: 45 }}
          imageStyle={{ borderRadius: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

