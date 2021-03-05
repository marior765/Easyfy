import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Input as InputComponent, InputProps, normalize } from 'react-native-elements';
import { Component } from 'src/types';
import { Colors, Fonts } from 'src/styles';
import { useTheme } from '@react-navigation/native';

export const Input: Component<InputProps> = memo(
  ({ labelStyle, inputContainerStyle, inputStyle, ...props }) => {
    const { colors } = useTheme();
    return (
      <InputComponent
        labelStyle={StyleSheet.flatten([styles.labelStyle, labelStyle, { color: colors.text }])}
        inputStyle={StyleSheet.flatten([styles.inputStyle, inputStyle])}
        inputContainerStyle={StyleSheet.flatten([
          { borderColor: colors.primary },
          inputContainerStyle,
        ])}
        {...props}
      />
    );
  },
);

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: '500',
    fontSize: normalize(9),
    textTransform: 'uppercase',
    letterSpacing: normalize(1),
  },
  inputStyle: { fontFamily: Fonts.GothamBook, fontSize: normalize(15) },
});
