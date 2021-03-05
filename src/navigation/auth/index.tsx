import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'src/constants';
import { Welcome, Login, Registration, ForgotPassword } from 'src/pages';
import { commonHeader } from 'src/components';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={commonHeader}>
    <Stack.Screen name={ROUTES.AUTH.WELCOME} component={Welcome} />
    <Stack.Screen name={ROUTES.AUTH.LOGIN} component={Login} />
    <Stack.Screen name={ROUTES.AUTH.REGISTRATION} component={Registration} />
    <Stack.Screen name={ROUTES.AUTH.FORGOT_PASSWORD} component={ForgotPassword} />
  </Stack.Navigator>
);

export default AuthStack;
