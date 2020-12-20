import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../themes/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
      height: (width / 2.4) + 55,
      marginBottom: 15
   },
   backgroundContainer: {
      backgroundColor: colors.theme4,
      width: width / 2.5,
      height: width / 2.4,
      borderRadius: 6,
      elevation: 9,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageBackground: {
      borderRadius: 6,
   },
   descPreviewContainer: {
      position: 'absolute',
      bottom: 0,
      height: 70,
      width: width / 2.5,
      backgroundColor: colors.theme3,
      borderRadius: 6
   }
});

export { styles };
