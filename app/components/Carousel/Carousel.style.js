import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../themes/colors';
import { outerRingDiameter } from '../../utils/constant';

const { width } = Dimensions.get('window');
const SPACING = 10;
const cardWidth = width - (SPACING * 2)

const styles = StyleSheet.create({
   container: {
      marginVertical: 10
   },
   title: {
      marginHorizontal: 10,
      marginBottom: 10,
      fontSize: 14,
      fontStyle: 'italic',
      color: colors.theme5
   },
   carouselContainer: {
      flexDirection: 'row',
      marginBottom: 10
   },
   card: {
      width: cardWidth,
      height: 140,
      borderRadius: 8,
      marginHorizontal: SPACING
   },
   image: {
      borderRadius: 8,
      overlayColor: colors.theme4
   },
   paginationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      // borderWidth: 1
   },
   dot: {
      width: 7,
      height: 7,
      borderRadius: 6,
      backgroundColor: colors.theme5,
      marginRight: 20
   },
   activeDot: {
      width: outerRingDiameter,
      height: outerRingDiameter,
      borderRadius: outerRingDiameter,
      borderWidth: 2,
      borderColor: colors.theme2,
      position: 'absolute',
      left: -4
   }
});

export { styles };
