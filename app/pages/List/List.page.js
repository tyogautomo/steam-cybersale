import React, { useRef, useState } from 'react';
import { ScrollView, View, Text, ImageBackground, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './List.style';
import { listData } from '../../resources/dummy';
import { bg } from '../../themes/images';
import { NominationList } from '../../components/NominationList/NominationList.component';
import { Carousel } from '../../components/Carousel/Carousel.component';
import { HEADER_HEIGHT } from '../../utils/constant';

const ListPage = (props) => {
   const translateY = useRef(new Animated.Value(0)).current;
   let currentOffset = 0;
   let direction = 'up';

   const onScroll = (e) => {
      const offsetY = e.nativeEvent.contentOffset.y;
      if (currentOffset < offsetY && direction === 'up') {
         direction = 'down';
         Animated.timing(translateY, {
            toValue: -HEADER_HEIGHT,
            duration: 500,
            useNativeDriver: true
         }).start();
      }
      if (currentOffset > offsetY && direction === 'down' || offsetY < 10) {
         direction = 'up'
         Animated.timing(translateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
         }).start();
      }

      currentOffset = offsetY;
   }

   const renderHeader = () => {
      return (
         <Animated.View style={[styles.headerContainer, { transform: [{ translateY }] }]}>
            <Icon name="menu" style={styles.menu} />
         </Animated.View>
      );
   };

   return (
      <>
         <ScrollView
            onScroll={onScroll}
            style={styles.container}
            showsVerticalScrollIndicator={false}
         >
            <ImageBackground style={styles.titleContainer} source={bg} imageStyle={styles.imageBg}>
               <View style={styles.titleWrap}>
                  <Icon name="steam" style={styles.icon} />
                  <Text style={styles.title}>Doomsday Sale 2077</Text>
               </View>
               <Text style={styles.slogan}>The Cybergalactica Steam Sale 2077. Save the day by playing your favorite games</Text>
               <Text style={styles.date}>Dec 21st - Jan 24th @ 10am PST</Text>
               <Text style={styles.feat}>Featuring Steam Awards © Nomination</Text>
            </ImageBackground>
            <Carousel />
            <NominationList listData={listData} {...props} />
            <View style={{ height: 100 }} />
         </ScrollView>
         { renderHeader()}
      </>
   )
}

export { ListPage };
