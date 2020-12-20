import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './ListCard.style';

const ListCard = ({ uri, item, navigation }) => {
   const onPress = (item) => () => {
      navigation.navigate('DetailPage', { item })
   };

   return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress(item)} style={styles.container}>
         <View style={styles.descPreviewContainer}>
            <Text>All Reviews</Text>
         </View>
         <SharedElement id={`photo.${item.id}`} key={item.id}>
            <ImageBackground
               source={{ uri }}
               style={styles.backgroundContainer}
               imageStyle={styles.imageBackground}
               resizeMode="cover"
            />
         </SharedElement>
      </TouchableOpacity>
   );
};

export { ListCard };
