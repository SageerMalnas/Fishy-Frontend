

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import OpenCamera from "./src/OpenCamera.js";
// import HomeScreen from "./src/HomeScreen";
// import NotificationScreen from "./src/NotificationScreen.js";
// import LoginScreen from "./src/LoginScreen";
// import SignupScreen from "./src/SignInScreen";
// import FishEcom from "./src/FishEcom/FishEcomScreen.js";
// import CustomDrawerContent from "./src/CustomDrawerContent"; 
// import Shop from './src/Shop';
// import DetailsScreen from './src/DetailsScreen';
// import {StatusBar} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationScreen} />
//         <Drawer.Screen name="OpenCamera" component={OpenCamera} />
//         <Drawer.Screen name="Shop" component={Shop} /> 
//         <Drawer.Screen name="Login" component={LoginScreen} />
//         <Drawer.Screen name="Signup" component={SignupScreen} />
//         <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/>
       
//       </Drawer.Navigator>
//       <StatusBar backgroundColor="white" barStyle="dark-content" />
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OpenCamera from "./src/OpenCamera.js";
import HomeScreen from "./src/HomeScreen";
import NotificationScreen from "./src/NotificationScreen.js";
import LoginScreen from "./src/LoginScreen";
import SignupScreen from "./src/SignInScreen";
import FishEcom from "./src/FishEcom/FishEcomScreen.js";
import CustomDrawerContent from "./src/CustomDrawerContent"; 
import Shop from './src/Shop';
import DetailsScreen from './src/DetailsScreen';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationScreen} />
    <Drawer.Screen name="OpenCamera" component={OpenCamera} />
    <Drawer.Screen name="Shop" component={Shop} /> 
    <Drawer.Screen name="Login" component={LoginScreen} />
    <Drawer.Screen name="Signup" component={SignupScreen} />
    <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/>
  </Drawer.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);


export default Navigation;
