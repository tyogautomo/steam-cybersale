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
      marginBottom: 5
   },
   icon: {
      fontSize: 30,
      marginRight: 10,
      color: 'white',
      textShadowColor: '#ffbb00',
      textShadowRadius: 9
   },
   title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
      textShadowColor: '#ffbb00',
      textShadowRadius: 9
   },
   slogan: {
      fontSize: 12,
      color: colors.theme5,
      marginBottom: 10,
      textShadowColor: '#ffbb00',
      textShadowRadius: 5
   },
   date: {
      color: colors.theme2,
      fontStyle: 'italic',
      fontSize: 14
   },
   feat: {
      color: colors.theme5,
      fontSize: 12
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
