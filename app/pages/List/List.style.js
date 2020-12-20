import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.theme4,
      paddingTop: 30
   },
   titleContainer: {
      marginHorizontal: 30,
      padding: 10,
      backgroundColor: colors.theme3,
      borderRadius: 9
   },
   title: {
      color: colors.theme5,
      fontWeight: 'bold',
      fontSize: 20
   },
   listContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 30,
      justifyContent: 'space-between',
      paddingTop: 30
   }
});

export { styles };
