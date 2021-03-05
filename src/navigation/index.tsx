import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SIGNED_IN, ROUTES } from 'src/constants';
import { ActiveTheme } from 'src/styles';

import AuthStack from './auth';
import AppStack from './app';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer theme={ActiveTheme}>
    <Stack.Navigator
      initialRouteName={SIGNED_IN.signed ? ROUTES.APP.ROOT : ROUTES.AUTH.ROOT}
      headerMode="none">
      <Stack.Screen name={ROUTES.AUTH.ROOT} component={AuthStack} />
      <Stack.Screen name={ROUTES.APP.ROOT} component={AppStack} />
    </Stack.Navigator>
  </NavigationContainer>
);
