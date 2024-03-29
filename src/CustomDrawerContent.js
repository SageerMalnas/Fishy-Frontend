// src/CustomDrawerContent.js

import React from 'react';
import { View, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  const handleSignOut = () => {
    props.navigation.navigate('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ padding: 20 }}>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
