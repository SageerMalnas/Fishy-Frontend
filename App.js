// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import OpenCamera from "./src/OpenCamera.js";
// import HomeScreen from "./src/HomeScreen";
// import TabNavigator from './src/TabNavigator'
// import LoginScreen from "./src/LoginScreen";
// import SignupScreen from "./src/SignInScreen";
// import FishEcom from "./src/FishEcom/FishEcomScreen.js";
// import CustomDrawerContent from "./src/CustomDrawerContent"; 
// import Shop from './src/Shop';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {StatusBar} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const screenOptions = {
//   headerStyle: {
//     backgroundColor: '#7efff4', 
//   },
//   headerTintColor: '#fff', 
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={screenOptions}>
//         <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function DrawerNavigator() {
//   return (
//     // <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#aa18ea',
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#333',
//         drawerLabelStyle: {
//           marginLeft: -25,
//           fontFamily: 'Roboto-Medium',
//           fontSize: 15,
//         },
//       }}>
//          <Drawer.Screen
//         name="Home"
//         component={TabNavigator}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="home-outline" size={22} color={color} />
//           ),
//         }}
//       />
    
    
//       <Drawer.Screen name="OpenCamera" component={OpenCamera} />
//       <Drawer.Screen name="Shop" component={Shop} /> 
//       <Drawer.Screen name="Login" component={LoginScreen} />
//       <Drawer.Screen name="Signup" component={SignupScreen} />
//       <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/> 
//     </Drawer.Navigator>
//   );
// }



// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from "./src/HomeScreen";
// import LoginScreen from "./src/LoginScreen";
// import SignupScreen from "./src/SignInScreen";
// import OpenCamera from "./src/OpenCamera";
// import FishEcom from "./src/FishEcom/FishEcomScreen";
// import Shop from './src/Shop';
// import CustomDrawerContent from "./src/CustomDrawerContent";

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="OpenCamera" component={OpenCamera} />
//       <Drawer.Screen name="Shop" component={Shop} />
//       <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/>
//     </Drawer.Navigator>
//   );
// }

// function AuthNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true); 

//   return (
//     <NavigationContainer>
//       {isUserLoggedIn ? (
//         <DrawerNavigator />
//       ) : (
//         <AuthNavigator />
//       )}
//     </NavigationContainer>
//   );
// }

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

function App() {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;