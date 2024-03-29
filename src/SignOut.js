// src/CustomDrawerContent.js

import React from 'react';
import { View, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  const handleSignOut = () => {
    // Your sign-out logic here
    // For example, clear authentication tokens and navigate to the login screen
    console.log('User signed out');
    // Navigate to a login or welcome screen, if applicable
    // props.navigation.navigate('LoginScreen');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{padding: 20}}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
