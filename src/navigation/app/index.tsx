import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'src/constants';
import { Home, History, Wallet, Profile, Settings } from 'src/pages';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={ROUTES.APP.HOME.ROOT} component={Home} />
    <Stack.Screen name={ROUTES.APP.PROFILE.ROOT} component={Profile} />
    <Stack.Screen name={ROUTES.APP.SETTINGS.ROOT} component={Settings} />
    <Stack.Screen name={ROUTES.APP.HISTORY.ROOT} component={History} />
    <Stack.Screen name={ROUTES.APP.WALLET.ROOT} component={Wallet} />
  </Stack.Navigator>
);

export default AppStack;
