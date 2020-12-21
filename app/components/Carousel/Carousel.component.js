import React, { useRef } from 'react';
import { View, Text, ScrollView, ImageBackground, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './Carousel.style';
import { bannerData } from '../../resources/dummy';

const Carousel = () => {
   const scrollX = useRef(new Animated.Value(0)).current;
   
   const onScroll = () => {
      return Animated.event([
         {
            nativeEvent: {
               contentOffset: {
                  x: scrollX
               }
            }
         }
      ])
   };

   const renderCard = (item) => {
      return (
         <TouchableOpacity activeOpacity={0.7}>
            <ImageBackground
               source={item.image}
               style={styles.card}
               imageStyle={styles.image}
               resizeMode="cover"
            >

            </ImageBackground>
         </TouchableOpacity>
      )
   };

   const renderPagination = () => {
      return (
         <View style={styles.paginationContainer}>
            {bannerData.map(item => <View style={styles.dot}/>)}
            <View style={styles.activeDot}/>
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Intergalactica Collection 30% ~ 90%</Text>
         <ScrollView
            horizontal
            pagingEnabled
            style={styles.carouselContainer}
            snapToAlignment="start"
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll()}
         >
            {bannerData.map(item => renderCard(item))}
         </ScrollView>
         {renderPagination()}
      </View>
   )
}

export { Carousel };
