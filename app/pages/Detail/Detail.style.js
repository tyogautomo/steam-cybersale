import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.15;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: 'white',
   },
   listContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginLeft: (width / 2) - 8 - (cardWidth / 2),
      marginBottom: 40
   },
   imagePreviewContainer: {
      width: cardWidth,
      height: cardWidth,
      borderRadius: cardWidth / 2,
      marginHorizontal: 8
   },
   imagePreviewStyle: {
      borderRadius: cardWidth / 2
   },
   detailContainer: {
      width: width - 50,
      marginHorizontal: (width - (width - 50)) / 2,
      borderRadius: 8,
      backgroundColor: 'white',
      height: 550
   },
   detailImage: {
      width: '100%',
      height: 150,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8
   },
   detailDescriptionContainer: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20
   }
});

export { styles };
