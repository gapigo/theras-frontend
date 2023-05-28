import React from 'react';
import { configureFonts, DefaultTheme } from 'react-native-paper';
import customFonts from './Fonts';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4169E1',
    accent: '#F1C40F',
    favorite: '#BADA55',
    cancelButton: '#A4C639',
    iconColor: '#808080',
  },
};

export default theme;
