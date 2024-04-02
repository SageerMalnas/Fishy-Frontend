import React from 'react'
import { View, Text,TouchableOpacity, ImageBackground } from 'react-native';
const Navbar = ({navigation}) => {
  return (
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
        <TouchableOpacity onPress={() => navigation?.openDrawer()}>
          <ImageBackground
            source={require("./assets/images/user-profile.jpg")}
            style={{ width: 45, height: 45 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>
  )
}

export default Navbar;
