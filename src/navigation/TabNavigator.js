import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import Shop from "../screens/Shop";
import OpenCamera from "../screens/OpenCamera";
import FishEcom from "../screens/FishEcom/FishEcomScreen";
import CartScreen from "../screens/FishEcom/CartScreen"; // Import the CartScreen component
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import LoginScreen from "../screens/LoginScreen";
import WishlistScreen from "../screens/FishEcom/WishlistScreen";
import UploadScreen from "../screens/UploadScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const FishEcomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FishEcom"
        component={FishEcom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart" // Add the CartScreen as a screen in the nested navigator
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wishlist" // Add the ProductDetailsScreen as a screen in the nested navigator
        component={WishlistScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OpenCamera"
        component={OpenCamera}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#1d3557" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#1d3557",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="OpenCamera"
        component={OpenCamera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" color={color} size={33} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: 'yellow' },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="FishEcom"
        component={FishEcomStack} /* Render the nested stack navigator */
        options={{
          // tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      
      {/* <Tab.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  if (routeName == "FishEcom") {
    return "none";
  }
  return "flex";
};

export default TabNavigator;
