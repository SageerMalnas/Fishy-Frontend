import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OpenCamera from "./src/OpenCamera.js";
import HomeScreen from "./src/HomeScreen";

import LoginScreen from "./src/LoginScreen";
import SignupScreen from "./src/SignInScreen";
import FishEcom from "./src/FishEcom/FishEcomScreen.js";
import CustomDrawerContent from "./src/CustomDrawerContent"; 
import Shop from './src/Shop';

import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#7efff4', 
  },
  headerTintColor: '#fff', 
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    
      <Drawer.Screen name="OpenCamera" component={OpenCamera} />
      <Drawer.Screen name="Shop" component={Shop} /> 
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
      <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/>
    </Drawer.Navigator>
  );
}

