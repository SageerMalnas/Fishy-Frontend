import React from 'react';
import { View, Image } from 'react-native';

export default function BannerSlider({ data }) {
  return (
    <View style={{ backgroundColor: '#7ffff6', borderRadius: 10 }}>
      <Image
        source={data.image}
        style={{ height: 150, width: 300, borderRadius: 10 }}
      />
    </View>
  );
}
