import React from 'react';
import { Text, View } from 'react-native';
import { Page } from 'src/types';
import { Button } from 'src/components';
import { ROUTES } from 'src/constants';

export const Welcome: Page<{}> = ({ navigation }) => {
  const navigateLogin = () => navigation.navigate(ROUTES.AUTH.LOGIN);
  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome</Text>
      <Button title="Go To Login" onPress={navigateLogin} />
    </View>
  );
};
