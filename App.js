// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Helooooo</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//Use Above code...and comment this code aswell OpenCamera code to avoid any errors
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OpenCamera from "./src/OpenCamera.js";
import HomeScreen from "./src/HomeScreen";
import NotificationScreen from "./src/NotificationScreen.js";
import LoginScreen from "./src/LoginScreen";
import SignupScreen from "./src/SignInScreen";
import FishEcom from "./src/FishEcom/FishEcomScreen.js";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="FISHY" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
        <Drawer.Screen name="OpenCamera" component={OpenCamera} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Signup from './src/SignInScreen';
// import Login from './src/LoginScreen';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Login" component={Login} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
