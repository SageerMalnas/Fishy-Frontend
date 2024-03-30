// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import OpenCamera from "./src/OpenCamera.js";
// import HomeScreen from "./src/HomeScreen";

// import LoginScreen from "./src/LoginScreen";
// import SignupScreen from "./src/SignInScreen";
// import FishEcom from "./src/FishEcom/FishEcomScreen.js";
// import CustomDrawerContent from "./src/CustomDrawerContent"; 
// import Shop from './src/Shop';

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
//     <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
    
//       <Drawer.Screen name="OpenCamera" component={OpenCamera} />
//       <Drawer.Screen name="Shop" component={Shop} /> 
//       <Drawer.Screen name="Login" component={LoginScreen} />
//       <Drawer.Screen name="Signup" component={SignupScreen} />
//       <Drawer.Screen name="Fish Ecommerce" component={FishEcom}/>
//     </Drawer.Navigator>
//   );
// }


import * as React from "react";



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/HomeScreen";
import LoginScreen from "./src/LoginScreen";
import SignupScreen from "./src/SignInScreen";
import CustomDrawerContent from "./src/CustomDrawerContent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    {/* Other drawer screens */}
  </Drawer.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
