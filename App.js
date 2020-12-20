import React from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './app/themes/colors';
import { MainStackNavigator } from './app/navigations/MainStackNavigator';

enableScreens();
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.theme4 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.theme4} />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
