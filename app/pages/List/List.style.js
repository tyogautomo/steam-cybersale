import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.theme4,
      paddingVertical: 30
   },
   titleContainer: {
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: colors.theme3,
      borderRadius: 9
   },
   titleWrap: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   icon: {
      fontSize: 25,
      marginRight: 10,
      color: colors.theme5
   },
   title: {
      color: colors.theme5,
      fontWeight: 'bold',
      fontSize: 20
   },
   listContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      paddingTop: 30
   }
});

export { styles };
