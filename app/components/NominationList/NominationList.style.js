import { StyleSheet } from 'react-native';

import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 10,
      marginVertical: 10
   },
   title: {
      fontSize: 14,
      fontStyle: 'italic',
      color: colors.theme5,
      marginBottom: 10
   },
   listContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
   }
});

export { styles };
