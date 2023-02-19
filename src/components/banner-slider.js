import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default function BannerSlider({ data }) {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={data.image}
          style={{ height: 150, width: 300, borderRadius: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}