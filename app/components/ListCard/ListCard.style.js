import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../themes/colors';

import { widthDivider, heightDivider } from '../../utils/constant';

const { width } = Dimensions.get('window');

const containerHeight = 80;

const styles = StyleSheet.create({
   container: {
      height: (width / heightDivider) + containerHeight,
      marginBottom: 10
   },
   backgroundContainer: {
      backgroundColor: colors.theme4,
      width: width / widthDivider,
      height: width / heightDivider,
      borderRadius: 6,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageBackground: {
      borderRadius: 6,
   },
   descPreviewContainer: {
      position: 'absolute',
      bottom: 0,
      height: containerHeight + 10,
      width: width / widthDivider,
      backgroundColor: colors.theme3,
      borderRadius: 6,
      padding: 8,
      paddingTop: 12
   },
   review: {
      fontSize: 10,
      color: colors.theme4
   },
   reviewValueContainer: {
      marginBottom: 5
   },
   reviewWord: {
      fontSize: 10,
      color: colors.theme2
   },
   reviewCount: {
      fontSize: 8,
      color: colors.theme5
   },
   footer: {
      flex: 1,
      flexDirection: 'row'
   },
   leftSide: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
   },
   rightSide: {
      flex: 3,
      borderWidth: 1
   },
   osIcon: {
      fontSize: 12,
      color: colors.theme4
   },
   discountCount: {
      
   },
   discountPriceContainer: {

   }
});

export { styles };
