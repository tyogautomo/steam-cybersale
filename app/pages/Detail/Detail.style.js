import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../themes/colors';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.15;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: colors.theme4,
   },
   listContainer: {
      flexDirection: 'row',
      marginLeft: (width / 2) - 8 - (cardWidth / 2),
      marginBottom: 40
   },
   iconContainer: {
      marginHorizontal: 8,
      alignItems: 'center'
   },
   icon: {
      width: cardWidth,
      height: cardWidth,
      borderRadius: cardWidth / 2,
      borderColor: colors.theme2
   },
   imagePreviewStyle: {
      borderRadius: cardWidth / 2
   },
   iconTitle: {
      fontSize: 10,
      fontStyle: 'italic',
      marginTop: 5,
      color: colors.theme5
   },
   detailContainer: {
      width: width - 50,
      height: 550,
      marginHorizontal: (width - (width - 50)) / 2,
      borderRadius: 8,
      backgroundColor: colors.theme3
   },
   detailImage: {
      width: '100%',
      height: 170,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8
   },
   detailDescriptionContainer: {
      flex: 1,
      backgroundColor: colors.theme3,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20
   },
   descriptionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.theme2,
      marginBottom: 10
   },
   descText: {
      color: colors.theme5
   }
});

export { styles };
