import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { ScrollView, View } from 'react-native';

import { styles } from './List.style';
import { listData } from '../../resources/dummy';
import { ListCard } from '../../components/ListCard/ListCard.component';

const ListPage = (props) => {
   return (
      <ScrollView style={styles.container}>
         <View style={styles.listContainer}>
            {listData.map((item, i) => (
               <ListCard key={i} uri={item.image} item={item} {...props} />
            ))}
         </View>
      </ScrollView>
   )
}

export { ListPage };
