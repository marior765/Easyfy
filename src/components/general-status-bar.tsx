import React from 'react';
import { StyleSheet, Platform, StatusBar, View, ColorValue, StatusBarProps } from 'react-native';
import { Component } from 'src/types';
import { normalize } from 'react-native-elements';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? normalize(46) : StatusBar.currentHeight;

interface Props extends StatusBarProps {
  backgroundColor: ColorValue;
}

export const GeneralStatusBar: Component<Props> = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]} testID="wrapper">
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
