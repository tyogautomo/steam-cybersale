import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './ListCard.style';
import { out } from 'react-native/Libraries/Animated/src/Easing';

const ListCard = ({ uri, item, navigation }) => {
   const onPress = (item) => () => {
      navigation.navigate('DetailPage', { item })
   };

   const currencyFormatter = (nominal) => {
      const stringNom = nominal.toString();
      let output = [];
      for (let i = stringNom.length - 1; i >= 0; i--) {
         output.unshift(stringNom[i]);
         if (i % 3 === 0 && i !== stringNom.length - 1 && i !== 0) {
            output.unshift(' ');
         }
      }
      return `Rp ${output.join('')}`;
   };

   return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress(item)} style={styles.container}>
         <View style={styles.descPreviewContainer}>
            <Text style={styles.review}>All Reviews</Text>
            <Text style={styles.reviewValueContainer}>
               <Text style={styles.reviewWord}>{item.reviews.word} </Text>
               <Text style={styles.reviewCount}> ({item.reviews.count})</Text>
            </Text>
            <View style={styles.footer}>
               <View style={styles.rightSide}>
                  <View style={styles.discountCountContainer}>
                     <Text style={styles.discount}>- {item.discount}%</Text>
                  </View>
                  <View style={styles.discountPriceContainer}>
                     <Text style={styles.priceOrigin}>{currencyFormatter(item.price)}</Text>
                     <Text style={styles.priceDiscounted}>{currencyFormatter(item.price)}</Text>
                  </View>
               </View>
               <View style={styles.leftSide}>
                  <Icon name="windows" style={styles.osIcon} />
               </View>
            </View>
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
