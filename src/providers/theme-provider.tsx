import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Component } from 'src/types';
import { GeneralStatusBar } from 'src/components';
import { ActiveTheme } from 'src/styles';

interface Props {
  children: ReactNode;
}

export const ThemeManager: Component<Props> = ({ children }) => {
  const commonStyle = {
    flex: 1,
    backgroundColor: ActiveTheme.colors.primary,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      testID="welcome"
      enabled
      style={commonStyle}>
      <GeneralStatusBar backgroundColor={ActiveTheme.colors.primary} />
      <SafeAreaView style={commonStyle}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};
