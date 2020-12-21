import React from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { colors } from './app/themes/colors';
import { MainStackNavigator } from './app/navigations/MainStackNavigator';

enableScreens();
LogBox.ignoreAllLogs();

const App = () => {
  React.useEffect(() => {
    changeNavigationBarColor(colors.theme3, true);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.theme4 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.theme1} />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
