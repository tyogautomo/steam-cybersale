import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { ListPage, DetailPage } from '../navigations/screens';
import { listData } from '../resources/dummy';

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
                  open: { animation: 'timing', config: { duration: 250 } },
                  close: { animation: 'timing', config: { duration: 250 } }
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
