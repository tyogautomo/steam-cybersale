import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Carousel.style';

const Carousel = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Intergalactica Collection SALE 30% ~ 90%</Text>
      </View>
   )
}

export { Carousel };
