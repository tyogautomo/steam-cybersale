import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './List.style';
import { listData } from '../../resources/dummy';
import { NominationList } from '../../components/NominationList/NominationList.component';
import { Carousel } from '../../components/Carousel/Carousel.component';

const ListPage = (props) => {
   return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         <View style={styles.titleContainer}>
            <View style={styles.titleWrap}>
               <Icon name="steam" style={styles.icon} />
               <Text style={styles.title}>Doomsday Sale 2077</Text>
            </View>
            <Text style={styles.slogan}>The Cybergalactica Steam Sale 2077. Save the day by playing your favorite games</Text>
            <Text style={styles.date}>Dec 21st - Jan 24th @ 10am PST</Text>
            <Text style={styles.feat}>Featuring Steam Awards © Nomination</Text>
         </View>
         <Carousel />
         <NominationList listData={listData} {...props} />
         <View style={{ height: 100 }} />
      </ScrollView>
   )
}

export { ListPage };
