import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import { styles } from './List.style';
import { listData } from '../../resources/dummy';
import { ListCard } from '../../components/ListCard/ListCard.component';

const ListPage = (props) => {
   return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>Winter Sale 2077</Text>
         </View>
         <View style={styles.listContainer}>
            {listData.map((item, i) => (
               <ListCard key={i} uri={item.image} item={item} {...props} />
            ))}
         </View>
      </ScrollView>
   )
}

export { ListPage };
