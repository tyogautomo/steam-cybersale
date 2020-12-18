import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './ListCard.style';

const ListCard = ({ uri, item, navigation }) => {
   const onPress = (item) => () => {
      navigation.navigate('DetailPage', { item })
   };

   return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress(item)}>
         <SharedElement id={`photo.${item.id}`} key={item.id}>
            <ImageBackground
               source={{ uri }}
               style={styles.cardContainer}
               imageStyle={styles.imageBackground}
               resizeMode="cover"
            />
         </SharedElement>
      </TouchableOpacity>
   );
};

export { ListCard };
