import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../themes/colors';
import { HEADER_HEIGHT } from '../../utils/constant';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.theme4,
      paddingVertical: 30 + 40
   },
   headerContainer: {
      width,
      height: HEADER_HEIGHT,
      backgroundColor: colors.theme1,
      position: 'absolute',
      elevation: 10,
      justifyContent: 'center',
      paddingHorizontal: 10
   },
   menu: {
      color: colors.theme5,
      fontSize: 35
   },
   titleContainer: {
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: colors.theme3,
      borderRadius: 9
   },
   imageBg: {
      borderRadius: 9,
      opacity: 0.1
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
   }
});

export { styles };
