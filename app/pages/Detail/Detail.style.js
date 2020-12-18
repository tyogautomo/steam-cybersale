import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.2;
const cardHeight = width * 0.12

const styles = StyleSheet.create({
   container: {
      marginTop: 30,
   },
   listContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap'
   },
   imagePreviewContainer: {
      width: cardWidth,
      height: cardHeight,
      borderRadius: 6,
      marginHorizontal: 8
   },
   imagePreviewStyle: {
      borderRadius: 6
   },
   detailImage: {
      width: width / 1.2,
      height: 150,
      borderRadius: 8
   }
});

export { styles };
