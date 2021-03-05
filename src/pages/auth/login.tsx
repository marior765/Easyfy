import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, normalize } from 'react-native-elements';
import { Page } from 'src/types';
import { Input } from 'src/components';
import { Colors } from 'src/styles';

const ICON_SIZE = normalize(20);

export const Login: Page<{}> = ({ navigation }) => (
  <>
    <Input
      label="username"
      placeholder="Name"
      leftIcon={
        <Icon type="ant-design" name="user" size={ICON_SIZE} color={Colors['color-primary-500']} />
      }
    />
    <Input
      label="password"
      placeholder="Password"
      leftIcon={
        <Icon type="ant-design" name="lock" size={ICON_SIZE} color={Colors['color-primary-500']} />
      }
      rightIcon={
        <Icon type="ant-design" name="eye" size={ICON_SIZE} color={Colors['color-primary-500']} />
      }
      secureTextEntry
    />
  </>
);
