import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import VideoPicker from '../screens/VideoPicker'
import TabNavigator from './TabNavigator';
import Shop from '../screens/Shop';
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#1d3557',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
        
      <Drawer.Screen
        name="Shop"
        component={Shop}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="location-outline" size={22} color={color} />
          ),
        }}
      />
      
      
      <Drawer.Screen
        name="Experts"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ribbon-outline" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
        name="VideoPicker"
        component={VideoPicker}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="videocam-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    
    </Drawer.Navigator>
  );
};

export default AuthStack;
