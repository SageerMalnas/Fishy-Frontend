// src/CustomDrawerContent.js

import React from 'react';
import { View, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = ({ navigation }) => {
  const handleSignOut = () => {
    console.log('User signed out')
    navigation.navigate('Login');
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
