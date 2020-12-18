import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
   cardContainer: {
      backgroundColor: 'white',
      width: width / 2.5,
      height: width / 2,
      borderRadius: 10,
      elevation: 9,
      marginBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageBackground: {
      borderRadius: 10,
      backgroundColor: 'white',
   }
});

export { styles };
