import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './app/navigations/MainStackNavigator';

enableScreens();
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
