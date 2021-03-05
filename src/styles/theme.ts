import { Colors } from './colors';
import { Appearance } from 'react-native';
import { DefaultTheme, Theme } from '@react-navigation/native';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    text: Colors.textDark,
    primary: Colors['color-primary-500'],
    background: Colors.backgroundLight,
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: Colors.textLight,
    primary: Colors['color-primary-900'],
    background: Colors.backgroundDark,
  },
};

export const isColorSchemeDark = Appearance.getColorScheme() === 'dark';

export const ActiveTheme = Appearance.getColorScheme() === 'dark' ? DarkTheme : LightTheme;
