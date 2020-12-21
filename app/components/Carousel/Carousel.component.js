import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, ImageBackground, Animated, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './Carousel.style';
import { bannerData } from '../../resources/dummy';
import { outerRingDiameter, ringExtend } from '../../utils/constant';

const { width } = Dimensions.get('window');
const multiplier = new Array((bannerData.length * 2) - 1).fill(null);
const opRangeWidth = new Array((bannerData.length * 2) - 1).fill(null);
const opRangeTX = new Array((bannerData.length * 2) - 1).fill(null);
let counter = 0;
let flag = true;
for (const [i] of multiplier.entries()) {
   multiplier[i] = counter;
   opRangeTX[0] = 0;
   if (flag) {
      opRangeWidth[i] = outerRingDiameter
      if (i !== 0) opRangeTX[i] = opRangeTX[i - 1] + 16;
   } else {
      opRangeWidth[i] = outerRingDiameter + ringExtend
      if (i !== 0) opRangeTX[i] = opRangeTX[i - 1] + 11;
   };

   flag = !flag;
   counter += 0.5;
}

const Carousel = () => {
   const bannerRef = useRef();
   const scrollX = useRef(new Animated.Value(0)).current;
   let offset = width;
   const timer = setInterval(() => {
      const itemLength = bannerData.length;
      let currentMultiply = Math.round(offset / width);
      bannerRef.current.scrollTo({
         x: offset,
         animated: true
      });
      if (currentMultiply === itemLength - 1) {
         offset = 0;
      } else {
         currentMultiply++;
         offset = width * currentMultiply;
      }
   }, 4000);
   const widthAnim = scrollX.interpolate({
      inputRange: multiplier.map(el => el * width),
      outputRange: opRangeWidth,
      extrapolate: 'clamp',
   });
   const translateX = scrollX.interpolate({
      inputRange: multiplier.map(el => el * width),
      outputRange: opRangeTX
   });

   useEffect(() => {
      return () => clearInterval(timer);
   }, []);

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

   const onMomentumEnd = (e) => {
      const newOffset = (e.nativeEvent.contentOffset.x);
      offset = newOffset;
   };

   const renderCard = (item, i) => {
      return (
         <TouchableOpacity key={i} activeOpacity={0.7}>
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
            {bannerData.map((_, i) => <View key={i} style={styles.dot} />)}
            <Animated.View
               style={[
                  styles.activeDot,
                  {
                     width: widthAnim,
                     transform: [{ translateX }]
                  }
               ]}
            />
         </View>
      );
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Intergalactica Collection 30% ~ 90%</Text>
         <ScrollView
            ref={bannerRef}
            horizontal
            pagingEnabled
            style={styles.carouselContainer}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll()}
            onMomentumScrollEnd={onMomentumEnd}
         >
            {bannerData.map((item, i) => renderCard(item, i))}
         </ScrollView>
         {renderPagination()}
      </View>
   )
}

export { Carousel };
