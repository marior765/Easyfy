import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Component } from 'src/types';
import { Fonts, commonShadow } from 'src/styles';
import { Button as ButtonComponent, ButtonProps, normalize } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

export const Button: Component<ButtonProps> = memo(
  ({ containerStyle, titleStyle, buttonStyle, ...props }) => {
    const theme = useTheme();
    const background = { backgroundColor: theme.colors.primary };
    return (
      <ButtonComponent
        containerStyle={StyleSheet.flatten([styles.container, containerStyle])}
        buttonStyle={StyleSheet.flatten([styles.button, buttonStyle, commonShadow, background])}
        titleStyle={StyleSheet.flatten([styles.titleStyles, titleStyle])}
        {...props}
      />
    );
  },
);

const styles = StyleSheet.create({
  button: {
    padding: normalize(15),
    width: '100%',
    borderRadius: 30,
    borderTopLeftRadius: 0,
  },
  container: {
    width: '100%',
    padding: normalize(10),
    borderRadius: 25,
  },
  titleStyles: { fontFamily: Fonts.GothamBook },
});
