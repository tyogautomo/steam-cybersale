import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './NominationList.style';
import { ListCard } from '../ListCard/ListCard.component';

const NominationList = (props) => {
   const { listData } = props;
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Steam Awards © Nomination</Text>
         <View style={styles.listContainer}>
            {listData.map((item, i) => (
               <ListCard key={i} uri={item.image} item={item} {...props} />
            ))}
         </View>
      </View>
   )
};

export { NominationList };
