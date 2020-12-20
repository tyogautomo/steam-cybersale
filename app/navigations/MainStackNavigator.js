import React from 'react';
import { Easing } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { listData } from '../resources/dummy';
import { transitionDelay } from '../utils/constant';
import { ListPage, DetailPage } from '../navigations/screens';

const Stack = createSharedElementStackNavigator();

const MainStackNavigator = () => {
   return (
      <Stack.Navigator headerMode="none">
         <Stack.Screen
            name="ListPage"
            component={ListPage}
            options={{ title: 'List' }}
         />
         <Stack.Screen
            name="DetailPage"
            component={DetailPage}
            options={{
               gestureEnabled: false,
               transitionSpec: {
                  open: {
                     animation: 'timing',
                     config: {
                        duration: transitionDelay,
                        easing: Easing.inOut(Easing.ease)
                     }
                  },
                  close: {
                     animation: 'timing',
                     config: {
                        duration: transitionDelay,
                        easing: Easing.inOut(Easing.ease)
                     }
                  }
               },
               cardStyleInterpolator: ({ current: { progress } }) => ({
                  cardStyle: {
                     opacity: progress
                  }
               })
            }}
            sharedElementsConfig={(route) => listData.map(item => `photo.${item.id}`)}
         />
      </Stack.Navigator>
   );
};

export { MainStackNavigator };
